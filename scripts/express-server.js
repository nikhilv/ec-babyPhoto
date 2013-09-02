var express = require('express'),
    path = require('path'),
    http = require('http');

var mongo = require('mongodb');

var Server = mongo.Server,
    BSON = mongo.BSONPure;

var mongoUri = process.env.MONGOLAB_URI || "mongodb://localhost/photos?auto_reconnnect"

var db = null;

mongo.connect(mongoUri, {}, function(err, database) {
    if(!err) {
        db = database;
        console.log("Connected to 'photos' database");
        db.collection('photos', {safe:true}, function(err, collection) {
            if (err) {
                console.log("The 'photos' collection doesn't exist. Creating it with sample data...");

            }
        });
    }
    else {
        console.log("COULD NOT CONNECT TO MONGO: " + mongoUri);
    }
});

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 8008);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
	// Serve up the contents of the app directory
    app.use(express.static(path.join(__dirname, '../app')));
});

app.post('/photos', function(req, res) {
    var photo = req.body;
    console.log('Submission: ' + JSON.stringify(photo));
	
	db.collection('photos', function(err, collection) {
        collection.insert(photo, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });

});

//
// results end point. Remove or obfuscate if deployed in real contest
//
app.get('/results', function(req, res) {
    db.collection('photos', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
});


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});