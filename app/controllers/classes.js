/* globals require, exports */
'use strict';

var db = require('../config');

exports.allClasses = function(req, res) {
    //create mongo instance
    var MongoClient = require('mongodb').MongoClient;

    //connect to mongo database, show errors if any
    //set collections to classes
    //query database to get all classes
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }

        var collection = db.collection('classes');
        collection.find().toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.classByType = function(req, res) {
    //then create mongo instance
    var type = req.query.type,
        MongoClient = require('mongodb').MongoClient;

    type = type.split('%20').join(' ');

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection('classes');
        collection.find({type : type}).toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.classById = function(req, res) {
    //then create mongo instance
    var id = req.query.id,
        MongoClient = require('mongodb').MongoClient;

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection('classes');
        collection.find({_id : parseInt(id)}).toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.updateClass = function(req, res) {
    //then create mongo instance
    var MongoClient = require('mongodb').MongoClient,
        data = req.body; // json object

    //connect to mongo database, show errors if any
    //set collections to classes
    //add new class
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection('classes');
        if (data.id) {
            collection.find({_id : parseInt(data.id)}).toArray(function(err, results) {
                collection.insert({
                        name : data.name || results.name,
                        type : data.type || results.type,
                        _id : parseInt(data.id)
                    }, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        } else {
            collection.insert({
                    name : data.name,
                    type : data.type
                }, function(err, results) {
                res.send(results);
                db.close();
            });
        }
    });
};

exports.getMembersByClass = function(req, res) {
    //then create mongo instance
    var id = req.query.id,
        MongoClient = require('mongodb').MongoClient;

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection('member-classes');
        collection.find({
                class_id : parseInt(id)
            }).toArray(function(err, results) {
                var returnVal = [],
                    i = 0,
                    length = results.length,
                    collection = db.collection('members'),
                    memberCallback = function(err, result) {
                        returnVal.push(result);
                    };

                // set return val to all the members of that class   
                for (i; i < length; i++) {
                    collection.find({member_class_id : parseInt(results[i]._id)}).toArray(memberCallback);
                }
                var n = 0,
                    userCallback = function(err, result) {
                        if (result.length > 1) {
                            returnVal.push(result);
                        }
                    };
                collection = db.collection('users');
                // set return val to all the members of that class   
                for (n; n < length; n++) {
                    collection.find({member_class_id : parseInt(results[n]._id)}).toArray(userCallback);
                }
                res.send(returnVal);
                db.close();
            });
    });
};