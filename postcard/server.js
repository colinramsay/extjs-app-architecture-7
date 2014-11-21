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

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


db.serialize(function() {
    if(!exists) {
        db.run('CREATE TABLE `Messages` (\
            `Id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,\
            `People`    TEXT NOT NULL,\
            `Subject`   TEXT,\
            `Body`  TEXT,\
            `Date`  TEXT NOT NULL,\
            `Tag`   TEXT,\
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


app.get('/tag', function(req, res) {
    db.all('SELECT DISTINCT Tag as name FROM Messages WHERE Tag IS NOT NULL', function(err, result) {
        res.json(result);
    });
});


app.get('/thread', function(req, res) {
    var filters = JSON.parse(req.query.filter),
        tag = filters.filter(function(f) { return f.property === 'tag'; })[0].value;

    console.log('Getting threads with tag %s', tag);

    db.all("SELECT Id as id, People as people, Subject as subject, Body as lastMessageSnippet, Date as lastMessageOn, ParentId as parentId FROM Messages WHERE ParentId IS NULL AND Tag = ? ORDER BY Date DESC", tag, function(err, result) {
        res.json({
            threads: result
        });
    });
})


app.put('/message/:id', function(req, res) {
    var updateQuery = "UPDATE Messages SET Tag = $tag WHERE Id = $id",
        params = {
            $id: req.body.id,
            $tag: req.body.tag
        };

    db.run(updateQuery, params, function updateCallback(err) {
        console.log(err);
        res.json({
            success: err ? false : true
        });
    });
});


app.post('/message', function(req, res) {


    var insertQuery = "INSERT INTO Messages (Id, People, Subject, Body, Date, ParentId, Tag) VALUES ($id, $people, $subject, $body, $date, $parentId, $tag)",
        params = {
            $id: null,
            $people: req.body.people,
            $subject: req.body.subject,
            $body: req.body.body,
            $date: (new Date()).toUTCString(),
            $parentId: req.body.parentId,
            $tag: req.body.parentId ? null : 'Sent'
        };

    db.run(insertQuery, params, function insertCallback(err) {
        console.log(err);
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
