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
            `People`    TEXT,\
            `Subject`   TEXT,\
            `Body`  TEXT,\
            `Date`  TEXT NOT NULL,\
            `Tag`   TEXT,\
            `ParentId` INTEGER\
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
    db.all('SELECT DISTINCT People as email FROM Messages', function(err, result) {
        res.json({
            contacts: result
        });
    });
});


app.get('/tag', function(req, res) {
    db.all('SELECT DISTINCT Tag as name FROM Messages WHERE Tag IS NOT NULL', function(err, result) {
        result.push({ name: 'Inbox' });
        result.push({ name: 'Archive' });
        result.push({ name: 'Sent' });
        res.json(result);
    });
});


app.get('/thread', function(req, res) {
    var filters = JSON.parse(req.query.filter),
        tag = filters.filter(function(f) { return f.property === 'tag'; })[0].value,
        searchTerm = filters.filter(function(f) { return f.property === 'searchTerm'; })[0].value,
        params = {
            $tag: tag
        },
        query = 'SELECT Id as id, People as people, Subject as subject, Body as lastMessageSnippet, Date as lastMessageOn, ParentId as parentId FROM Messages WHERE ParentId IS NULL AND Tag = $tag';

    if(searchTerm) {
        query += ' AND (People LIKE $searchTerm OR Subject LIKE $searchTerm OR Body LIKE $searchTerm) ';
        params['$searchTerm'] = searchTerm;
    }

    query += ' ORDER BY Date DESC ';

    db.all(query, params, function(err, result) {
        res.json(result);
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
    var selectQuery = "SELECT Id as id, People as people, Subject as subject, Body as body, Date as date, ParentId as parentId, Tag as tag FROM Messages WHERE ParentId = ? OR Id = ?";

    db.all(selectQuery, req.query.parentId, req.query.parentId, function(err, result) {
        res.json(result);
    });
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
