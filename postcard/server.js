var sqlite3 = require('sqlite3').verbose(),
    express = require('express'),
    fs = require('fs'),
    bodyParser = require('body-parser');

var DB_PATH = 'email.db',
    db = new sqlite3.Database(DB_PATH),
    exists = fs.existsSync(DB_PATH),
    port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

db.serialize(function() {
    if(!exists) {
        db.run('CREATE TABLE `Messages` (\
            `Id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `People`    TEXT NOT NULL,\
            `Subject`   TEXT,\
            `Body`  TEXT,\
            `Date`  TEXT NOT NULL,\
            `ParentId` INTEGER NOT NULL\
        );');

        db.run('CREATE TABLE `Contacts` (\
            `Id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `Name`  TEXT,\
            `Email` TEXT,\
            `Label` TEXT\
        );');
    }
});



app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1841');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));

    next();
});


app.get('/contact', function(req, res) {
    res.json({
        contacts: [
            { id: 1, name: 'Colin Ramsay', email: 'colin@somewhere.com', label: 'Colin <colin@somewhere.com>' },
            { id: 2, name: 'Thomas Sharpe', email: 'tom@nowhere.org', label: 'Thomas <tom@nowhere.com>' }
        ]
    });
});



app.get('/thread', function(req, res) {
    db.all("SELECT Id as id, People as people, Subject as subject, Body as lastMessageSnippet, Date as lastMessageOn, ParentId as parentId FROM Messages WHERE ParentId IS NULL ORDER BY Date DESC", function(err, result) {
        res.json({
            threads: result
        });
    });
})

app.post('/message', function(req, res) {
    var insertQuery = "INSERT INTO Messages (Id, People, Subject, Body, Date, ParentId) VALUES ($id, $people, $subject, $body, $date, $parentId)",
        params = {
            $id: null,
            $people: req.body.people,
            $subject: req.body.subject,
            $body: req.body.body,
            $date: (new Date()).toUTCString(),
            $parentId: req.body.parentId
        };

    db.run(insertQuery, params, function insertCallback() {

        res.json({
            success: true,
            messages: [{
                id: this.lastID
            }]
        });    
    });    
});


app.get('/message', function(req, res) {
    var selectQuery = "SELECT Id as id, People as people, Subject as subject, Body as body, Date as date, ParentId as parentId  FROM Messages WHERE ParentId = ? OR Id = ?";

    db.all(selectQuery, req.query.parentId, req.query.parentId, function(err, result) {
        res.json({
            messages: result
        });
    });
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
