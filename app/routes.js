    module.exports = function(app) {

        // server routes =========================================================

        // teacher routes ========================================================
            app.get('/api/teachers/getAllTeachers', function(req, res) {

                var MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

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
                var urlArray = req.url.split('='),
                    id = urlArray[urlArray.length - 1],
                    MongoClient = require('mongodb').MongoClient, 
                    format = require('util').format;

                MongoClient.connect('mongodb://127.0.0.1:27017/FaithTracker', function (err, db) {
                    if(err) throw err;

                    var collection = db.collection('teachers');
                    collection.find({_id : id}).toArray(function(err, results) {
                        res.send(results);
                        db.close();
                    });
                });
            });

        // bus routes ============================================================

        
        // class routes ==========================================================


        // member routes =========================================================


        // 

        // frontend routes =======================================================
        
        //for js files, route goes to that file
        app.get('*.js', function(req, res) {
            res.sendfile('./public' + req.url); 
        });

        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); 
        });

    };
