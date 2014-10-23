    module.exports = function(app) {

        // server routes =========================================================

        // teacher routes ========================================================
            app.get('/api/teachers/getAllTeachers', function(req, res) {
                //create mongo instance
                //include format utility
                var MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

                //connect to mongo database, show errors if any
                //set collections to teachers
                //query database to get all teachers
                MongoClient.connect('mongodb://127.0.0.1:27017/FaithTracker', function (err, db) {
                    if(err) throw err;

                    var collection = db.collection('teachers');
                    collection.find().toArray(function(err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });

            app.get('/api/teachers/id*', function(req, res) {
                //splid url on '=' to get numerial id
                //then create mongo instance
                //include format utility
                var urlArray = req.url.split('='),
                    id = urlArray[urlArray.length - 1],
                    MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

                //connect to mongo database, show errors if any
                //set collections to teachers
                //query database using ID set above
                MongoClient.connect('mongodb://127.0.0.1:27017/FaithTracker', function (err, db) {
                    if(err) throw err;
                    var collection = db.collection('teachers');
                    collection.find({_id : parseInt(id)}).toArray(function(err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });

            app.post('/api/teachers/new/', function(req, res) {
                //then create mongo instance
                //include format utility
                var MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

                //connect to mongo database, show errors if any
                //set collections to teachers
                //add new teacher
                MongoClient.connect('mongodb://127.0.0.1:27017/FaithTracker', function (err, db) {
                    if(err) throw err;
                    var collection = db.collection('teachers');
                    collection.find({_id : parseInt(id)}).toArray(function(err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });

        // bus routes ============================================================

        
        // class routes ==========================================================
            app.get('/api/classes/getAllClasses', function(req, res) {
                //create mongo instance
                //include format utility
                var MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

                //connect to mongo database, show errors if any
                //set collections to classes
                //query database to get all classes
                MongoClient.connect('mongodb://127.0.0.1:27017/FaithTracker', function (err, db) {
                    if(err) throw err;

                    var collection = db.collection('classes');
                    collection.find().toArray(function(err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });

        // member routes =========================================================
            app.get('/api/members/getAllMembers', function(req, res) {
                //create mongo instance
                //include format utility
                var MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

                //connect to mongo database, show errors if any
                //set collections to members
                //query database to get all members
                MongoClient.connect('mongodb://127.0.0.1:27017/FaithTracker', function (err, db) {
                    if(err) throw err;

                    var collection = db.collection('members');
                    collection.find().toArray(function(err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });



        // frontend routes =======================================================
        
        //for js files, route goes to that file
        app.get('*.js', function(req, res) {
            res.sendfile('./public' + req.url); 
        });

        //for css files, route goes to that file
        app.get('*.css', function(req, res) {
            res.sendfile('./public' + req.url); 
        });

        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); 
        });

    };
