/* globals exports, require */

// set your port, database name,
// and IP if different from default
'use strict';

var host = 'localhost',
    user = 'faithTrackUser',
    databaseName = 'faithTrack',
    password = 'itsaSecret';

var mysql = require('mysql');
exports.connection = mysql.createConnection({
  host: host,
  user: user,
  password: databaseName,
  database: password
});

exports.name = databaseName;
