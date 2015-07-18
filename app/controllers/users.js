"use strict";
var db = require("../config");

exports.allUsers = function(req, res) {
    //create mongo instance
    //include format utility
    var MongoClient = require("mongodb").MongoClient;

    //connect to mongo database, show errors if any
    //set collections to classes
    //query database to get all classes
    MongoClient.connect(db.dbName, function (err, db) {
        if(err) throw err;

        var collection = db.collection("users");
        collection.find().toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.userById = function(req, res) {
    //splid url on '=' to get type
    //then create mongo instance
    //include format utility
    var id = req.query.id,
        MongoClient = require("mongodb").MongoClient;

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if(err) throw err;
        var collection = db.collection("users");
        collection.find({_id : parseInt(id)}).toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.updateUser = function(req, res) {
    //then create mongo instance
    //include format utility
    var MongoClient = require("mongodb").MongoClient, 
        data = req.body; // json object

    //connect to mongo database, show errors if any
    //set collections to classes
    //add new class
    MongoClient.connect(db.dbName, function (err, db) {
        if(err) throw err;
        var collection = db.collection("users");

        // if we passed an id, get that users info
        // set default to current users info
        if (data.id) {
            collection.find({_id: parseInt(data.id)}).toArray(function(err, results) {
                var insertData = {
                    name_first : data.first || results.name_first,
                    name_last : data.last || results.name_last,
                    email : data.email || results.email,
                    password : data.password || results.password,
                    role : data.role || results.role,
                    class_id : data.classId || results.class_id,
                    member_id : data.memberId || results.member_id,
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
                    name_first : data.first,
                    name_last : data.last,
                    email : data.email,
                    password : data.password,
                    role : data.role,
                    class_id : data.classId,
                    member_id : data.memberId
                }, function(err, results) {
                res.send(results);
                db.close();
            });
        }
    });
};

exports.userByType = function(req, res) {
    //splid url on '=' to get type
    //then create mongo instance
    //include format utility
    var role = req.query.role,
        MongoClient = require("mongodb").MongoClient;

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if(err) throw err;
        var collection = db.collection("users");
        collection.find({role : role}).toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};