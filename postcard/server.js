var sqlite3 = require('sqlite3').verbose(),
    express = require('express');

var DB_PATH = 'email.db',
    db = new sqlite3.Database(DB_PATH),
    //exists = fs.existsSync(DB_PATH),
    port = process.env.PORT || 3000;

var app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:1841');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'));

    next();
});


app.get('/message', function(req, res) {
    console.log('responding to request for messages %s', req.query.threadId);
    var data;

    switch(req.query.threadId) {
        case '1':
            data = {
                messages: [
                    {
                        id: 1,
                        people: 'Ralph Steadman',
                        subject: 'McDonalds',
                        date: new Date(),
                        body: 'Morbi sit amet lacinia mauris. Integer pulvinar diam nunc, sed convallis ante lobortis ac. Donec faucibus sagittis nisi quis varius. In ex orci, sagittis ut maximus vel, accumsan et ante. Praesent sit amet erat ligula. Suspendisse euismod enim turpis, nec mollis nulla semper commodo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ut ornare sapien, quis porta enim. Cras sed lorem neque. Cras malesuada neque a mi convallis, eget suscipit nisi tempus. Donec sit amet lorem vel arcu ultrices efficitur vitae non sem. Praesent vestibulum, orci condimentum faucibus gravida, dolor odio rutrum velit, et tincidunt neque ligula dignissim felis. Morbi consectetur urna dignissim metus pretium volutpat. Vestibulum vitae ultrices enim.'
                    },
                    {
                        id: 2,
                        people: 'Abe Elias',
                        subject: '666 1234',
                        date: new Date(),
                        body: 'Nullam condimentum elit id quam rutrum ultricies. Maecenas in volutpat purus. Praesent in tortor id turpis sodales bibendum. Donec dapibus eros consequat, porta metus et, rhoncus ante. Praesent eget nisi maximus, lacinia metus accumsan, bibendum diam. Praesent sagittis, nulla sed sodales aliquet, lectus justo lacinia dolor, at feugiat erat tortor eu odio. Vivamus vel diam pretium, dapibus est in, condimentum lacus. Nullam tincidunt vel erat ac facilisis. Curabitur nibh sem, porttitor nec porta a, vulputate et quam. Suspendisse fringilla, nibh iaculis maximus porta, magna massa mattis ipsum, eu accumsan erat ante eu justo. In hendrerit vel augue non aliquam. Sed venenatis porttitor nibh et vulputate. Proin tempus quam at enim dictum faucibus. Suspendisse potenti.'
                    }
                ]
            };
            break;
        case '2':
            data = {
                messages: [
                {
                "id": "54662680af8a7757161d331c",
                "people": "Jeannine Faulkner",
                "subject": "velit do proident",
                "date": "2014-11-10T07:43:57 -00:00",
                "body": "Nostrud sunt tempor aute pariatur incididunt laborum deserunt amet. Ut commodo veniam exercitation irure officia consectetur velit exercitation ullamco et voluptate nisi voluptate. Voluptate fugiat ex aliqua enim ea tempor. Culpa anim cillum aliquip duis pariatur velit et quis. Nulla ipsum irure sint est officia qui nulla elit ea. Non id mollit irure anim aute est fugiat occaecat pariatur ex consequat sint excepteur sit. Reprehenderit Lorem pariatur laboris reprehenderit proident magna incididunt fugiat adipisicing labore voluptate laborum est.\r\n"
                },
                {
                "id": "546626804636e1d95c34ebfa",
                "people": "Cain French",
                "subject": "do duis eu",
                "date": "2014-11-12T07:11:29 -00:00",
                "body": "Reprehenderit deserunt fugiat sint consectetur ut ex est exercitation nostrud voluptate officia est. Occaecat cupidatat pariatur dolore culpa minim laboris duis nostrud eu ipsum aliqua exercitation consequat. Quis amet aute occaecat qui exercitation dolore do ea aliqua cillum id nostrud. Officia elit fugiat laborum fugiat.\r\n"
                },
                {
                "id": "54662680e185e0b5cbcd546d",
                "people": "Turner Underwood",
                "subject": "eiusmod mollit nulla",
                "date": "2014-11-25T02:48:58 -00:00",
                "body": "Nisi mollit enim ipsum est esse laborum id non consequat id anim nisi aliqua cupidatat. Incididunt officia reprehenderit id pariatur. Magna et veniam occaecat Lorem non minim dolor occaecat consequat ut.\r\n"
                },
                {
                "id": "5466268025bb19d9f8c95c0a",
                "people": "Hilary Hays",
                "subject": "do elit cillum",
                "date": "2014-11-18T12:36:44 -00:00",
                "body": "Exercitation Lorem labore proident aliquip proident amet consectetur cupidatat commodo non tempor. Officia consectetur ad voluptate nisi non nostrud velit. Qui irure ut minim tempor. Duis consequat magna excepteur incididunt cupidatat excepteur est dolor consequat eu. Lorem nulla non amet anim do aute eu quis in irure mollit amet irure. Aliquip amet pariatur ea aliqua nisi anim labore tempor dolor quis laborum ipsum culpa esse. Occaecat ullamco consequat sint anim et incididunt et.\r\n"
                }
            ]
            };

            break;
    }

    res.json(data);
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});


// db.serialize(function() {
//     // Initial database setup.
//     if(!exists) {
//         db.run('CREATE TABLE Messages (thing TEXT)');
//     }
// });

