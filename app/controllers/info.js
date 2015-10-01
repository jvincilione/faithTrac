/* globals require, exports */
"use strict";
var db = require("../config");

exports.getInfo = function(req, res) {
    // create mongo instance
    var MongoClient = require("mongodb").MongoClient;

    // connect to mongo database, show errors if any
    // set collections to info
    // query database to get app info
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }

        var collection = db.collection("info");
        collection.find().toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.updateInfo = function(req, res) {
    // then create mongo instance
    var MongoClient = require("mongodb").MongoClient, 
        data = req.body; // json object

    // connect to mongo database, show errors if any
    // set collections to info
    // add/update info
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("info");

        // if we passed an id, get that users info
        // set default to current users info
        if (data.id) {
            collection.find({_id: parseInt(data.id)}).toArray(function(err, results) {
                var insertData = {
                    title : data.title || results.title,
                    tagline : data.tagline || results.tagline,
                    _id : parseInt(data.id)
                };
                collection.insert(insertData, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        // otherwise, create a new record
        } else {
            collection.insert({
                    title: data.title || null,
                    tagline: data.tagline || null
                }, function(err, results) {
                res.send(results);
                db.close();
            });
        }
    });
};

exports.logError = function(req, res) {
    // then create mongo instance
    var MongoClient = require("mongodb").MongoClient, 
        data = req.body; // json object

    // connect to mongo database, show errors if any
    // set collections to errorLog
    // add error to log
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("errorLog");

        collection.insert({
                message : data
            }, function(err, results) {
            res.send(results);
            db.close();
        });
    });
};