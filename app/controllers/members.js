// /* globals require, exports */
// 'use strict';

// var db = require('../config');

// exports.allMembers = function(req, res) {
//     // create mongo instance
//     var MongoClient = require('mongodb').MongoClient;

//     // connect to mongo database, show errors if any
//     // set collections to classes
//     // query database to get all classes
//     MongoClient.connect(db.dbName, function (err, db) {
//         if (err) {
//             res.send(err);
//             db.close();
//         }

//         var collection = db.collection('members');
//         collection.find().toArray(function(err, results) {
//             res.send(results);
//             db.close();
//         });
//     });
// };

// exports.memberById = function(req, res) {
//     // splid url on '=' to get type
//     // then create mongo instance
//     // include format utility
//     var MongoClient = require('mongodb').MongoClient,
//         id = req.query.id;

//     // connect to mongo database, show errors if any
//     // set collections to teachers
//     // query database using ID set above
//     MongoClient.connect(db.dbName, function (err, db) {
//         if (err) {
//             res.send(err);
//             db.close();
//         }
//         var collection = db.collection('members');
//         collection.find({_id : id}).toArray(function(err, results) {
//             res.send(results);
//             db.close();
//         });
//     });
// };

// exports.updateMember = function(req, res) {
//     // then create mongo instance
//     var MongoClient = require('mongodb').MongoClient,
//         data = req.body; // json object

//     // connect to mongo database, show errors if any
//     // set collections to classes
//     // add new class
//     MongoClient.connect(db.dbName, function (err, db) {
//         if (err) {
//             res.send(err);
//             db.close();
//         }
//         var collection = db.collection('members');
//         if (data.id) {
//             collection.find({_id : data.id}).toArray(function(err, results) {
//                 var insertData = {
//                     name_first : data.first || results.name_first,
//                     name_last : data.last || results.name_last,
//                     guardian : data.guardian || results.guardian,
//                     g_relationship : data.g_relationship || results.g_relationship,
//                     birthdate : data.birthdate || results.birthdate,
//                     address : data.address || results.address,
//                     address2 : data.address2 || results.address2,
//                     city : data.city || results.city,
//                     state : data.state || results.state,
//                     phone : data.phone || results.phone,
//                     phone2 : data.phone2 || results.phone2,
//                     _id : parseInt(data.id)
//                 };
//                 collection.insert(insertData, function(err, results) {
//                     res.send(results);
//                     db.close();
//                 });
//             });
//         } else {
//             collection.insert({
//                     name_first : data.first,
//                     name_last : data.last,
//                     guardian : data.guardian,
//                     g_relationship : data.g_relationship,
//                     birthdate : data.birthdate,
//                     address : data.address,
//                     address2 : data.address2,
//                     city : data.city,
//                     state : data.state,
//                     phone : data.phone,
//                     phone2 : data.phone2
//                 }, function(err, results) {
//                     // if a classId is passed, add a record
//                     // to the memberClasses table
//                     if (data.classId) {
//                         var mc_collection = db.collection('memberClasses');
//                         mc_collection.insert({
//                             class_id : data.classId,
//                             member_id : data.studentId
//                         });
//                     } else {    
//                         res.send(results);
//                         db.close();   
//                     }
//             });
//         }
//     });
// };