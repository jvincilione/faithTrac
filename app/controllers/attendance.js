// /* globals require, exports */
// 'use strict';

// var db = require('../config');

// exports.newRecord = function(req, res) {
//     var MongoClient = require('mongodb').MongoClient,
//         data = req.body; // json object

//     //connect to mongo database, show errors if any
//     //set collections to classes
//     //add new class
//     MongoClient.connect(db.dbName, function (err, db) {
//         if (err) {
//             res.send(err);
//             db.close();
//         }
//         var collection = db.collection('attendance');
//         collection.insert({
//                 date : data.date,
//                 class_id : data.class_id,
//                 member_id : data.member_id
//             }, function(err, results) {
//             res.send(results);
//             db.close();
//         });
//     });
// };

// exports.getAttendeeReport = function(req, res) {
//     //create mongo instance
//     var memberId = req.query.memberId,
//         MongoClient = require('mongodb').MongoClient;

//     //connect to mongo database, show errors if any
//     //set collections to teachers
//     //query database using ID set above
//     MongoClient.connect(db.dbName, function (err, db) {
//         if (err) {
//             res.send(err);
//             db.close();
//         }
//         var collection = db.collection('classes');
//         collection.find({member_id : parseInt(memberId)}).toArray(function(err, results) {
//             res.send(results);
//             db.close();
//         });
//     });
// };

// exports.deleteAttendeeRecord = function(req, res) {

// };