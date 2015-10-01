/* globals require, exports, $set*/
"use strict";
var db = require("../config"),
    rand = require("csprng"),
    crypt = require("crypto"),
    mongoose = require("mongoose"),
    ObjectId = mongoose.Types.ObjectId;

exports.allUsers = function(req, res) {
    //create mongo instance
    //include format utility
    var MongoClient = require("mongodb").MongoClient;

    //connect to mongo database, show errors if any
    //set collections to classes
    //query database to get all classes
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }

        var collection = db.collection("users");
        collection.find().toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.userById = function(req, res) {
    //then create mongo instance
    //include format utility
    var id = req.query.id,
        MongoClient = require("mongodb").MongoClient;

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("users");
        collection.find({_id : ObjectId(id)}).toArray(function(err, results) {
            var user = {
                id: results[0]._id,
                class_id: results[0].class_id,
                email: results[0].email,
                member_id: results[0].member_id,
                name_first: results[0].name_first,
                name_last: results[0].name_last,
                role: results[0].role
            };
            res.send(user);
            db.close();
        });
    });
};

exports.updateUser = function(req, res) {
    // create mongo instance and get the passed json
    var MongoClient = require("mongodb").MongoClient, 
        data = req.body; // json object

    // connect to mongo database, show errors if any
    // set collections to users
    // add/update user
    MongoClient.connect(db.dbName, function (err, db) {
        if(err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("users");

        // if we passed an id, get that users info
        // set default to current users info
        if (data.id) {
            collection.find({
                _id: ObjectId(data.id)
            }).toArray(function(err, results) {
                var record = results[0],
                    password, insertData, salt;
                if (data.password) {
                    // create salt then hash password.
                    salt = rand(4096, 36);
                    password = hash(data.password, salt);
                } else {
                    salt = record.salt;
                    password = record.password;
                }
                insertData = {
                    name_first : data.first || record.name_first,
                    name_last : data.last || record.name_last,
                    email : data.email || record.email,
                    password : password,
                    hash : salt,
                    role : parseInt(data.role) || parseInt(record.role),
                    class_id : data.classId || record.class_id,
                    member_id : data.memberId || record.member_id,
                    _id : data.id
                };
                collection.update({
                        _id: ObjectId(data.id)
                    }, 
                    {$set, insertData}, 
                    function(err, results) {
                        res.send(results);
                        db.close();
                    }
                );
            });
        // otherwise, create a new record
        } else {
            // create salt then hash password.
            var salt = rand(4096, 36),
                password = hash(data.password, salt);

            collection.find({
                email : data.email
            }).toArray(function(err, results) {
                if (results.length > 0) {
                    res.send("Email found");
                    db.close();
                    return;
                }
                collection.insert({
                    name_first : data.name_first,
                    name_last : data.name_last,
                    email : data.email,
                    password : password,
                    salt : salt,
                    role : parseInt(data.role),
                    class_id : data.classId,
                    member_id : data.memberId
                }, function(err, results) {
                    res.send(results);
                    db.close();
                });
            });
        }
    });
};

exports.deleteUser = function(req, res) {
    // create mongo instance and get the passed json
    var MongoClient = require("mongodb").MongoClient, 
        data = req.body; // json object

    // connect to mongo database, show errors if any
    // set collections to users
    // add/update user
    MongoClient.connect(db.dbName, function (err, db) {
        if(err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("users");
        if (data.id) {
            collection.remove({
                _id: ObjectId(data.id)
            }, function(err, result) {
                res.send(result);
                db.close();
            });
        }
    });
},

exports.userByType = function(req, res) {
    //then create mongo instance
    //include format utility
    var role = req.query.role,
        MongoClient = require("mongodb").MongoClient;

    //connect to mongo database, show errors if any
    //set collections to teachers
    //query database using ID set above
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("users");
        collection.find({
            role : role
        }).toArray(function(err, results) {
            res.send(results);
            db.close();
        });
    });
};

exports.loginUser = function(req, res) {
    //then create mongo instance
    //include format utility
    var MongoClient = require("mongodb").MongoClient, 
        data = req.body; // json object

    //connect to mongo database, show errors if any
    //set collections to classes
    //add new class
    MongoClient.connect(db.dbName, function (err, db) {
        if (err) {
            res.send(err);
            db.close();
        }
        var collection = db.collection("users"),
            email = data.email,
            pass = data.password,
            hashedPass;

        // try to find user in system
        collection.find({
            email: email
        }).toArray(function(err, results) {
            if (results.length > 0) {
                var record = results[0],
                    recordPass;

                hashedPass = hash(pass, record.salt).toString("hex");
                recordPass = record.password.buffer.toString("hex");

                if (hashedPass === recordPass) {
                    res.send({
                        user : {
                            name_first : record.name_first,
                            name_last : record.name_last,
                            role : record.role,
                            class_id : record.class_id,
                            member_class_id : record.member_class_id,
                            id : record._id   
                        },
                        success : true
                    });
                } else {
                    res.send({
                        success: false,
                        message: "Invalid password"
                    });
                }
            } else {
                res.send({
                    success: false,
                    message: "Invalid email"
                });
            }
            db.close();
        });
    });
};

var hash = function(pass, salt) {
    if (typeof pass === "undefined" || typeof salt === "undefined") {
        return "error";
    }
    return crypt.pbkdf2Sync(pass, salt, 15000, 512, "sha256", function(err, key) {
        return key;
    });
};