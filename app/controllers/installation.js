/* globals require, exports */
'use strict';
var database = require('../config/db'),
    db = database.connection,
    dbname = database.name,
    rand = require('csprng'),
    crypt = require('hash');

exports.databaseExists = function() {
    db.connect();
    // this simply checks to see if we've created
    // the database.
    db.query('SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME=' + dbname + ';', 
        function(err, rows) {
            if (rows.length > 0) {
                db.query('SHOW TABLES LIKE "meta"', function(err, tables) {
                    if (tables.length > 0) {
                        return true;
                    } else {
                        return 'Tables';
                    }
                });
            } else {
                return 'Database';
            }
    });
    db.end();
};

exports.buildDatabase = function(req, res) {
    db.connect();

    db.query('CREATE TABLE meta (' +
        '_kp_meta INTEGER PRIMARY KEY,' +
        'name_org VARCHAR(255),' +
        'tagline VARCHAR(255),' +
        'address_1 TEXT,' +
        'address_2 TEXT,' +
        'city VARCHAR(255),' +
        'state VARCHAR(5),' +
        'postal INT(5),' +
        'country VARCHAR(50),' +
        'phone VARCHAR(16)' +
    ')');

    db.query('CREATE TABLE navigation (' +
        '_kp_nav INTEGER PRIMARY KEY,' +
        'title VARCHAR(255),' +
        'icon_class VARCHAR(32),' +
        'default_title VARCHAR(255)' +
    ')');

    db.query('CREATE TABLE users (' +
        '_kp_user INTEGER PRIMARY KEY,' +
        '_kf_class TEXT,' +
        '_kf_member INT(10),' +
        'email VARCHAR(255),' +
        'password TEXT,' +
        'salt TEXT,' +
        'name_first VARCHAR(255),' +
        'name_last VARCHAR(255),' +
        'role INT(1)' +
    ')');

    db.query('CREATE TABLE members (' +
        '_kp_member INTEGER PRIMARY KEY,' +
        '_kf_class TEXT,' +
        '_kf_member TEXT,' +
        'description TEXT' +
    ')');

    db.query('CREATE TABLE members_meta (' +
        '_kp_member_meta INTEGER PRIMARY KEY,' +
        '_kf_member INT(10),' +
        'name_first VARCHAR(255),' +
        'name_last VARCHAR(255),' +
        'address_1 TEXT,' +
        'address_2 TEXT,' +
        'city VARCHAR(255),' +
        'state VARCHAR(5),' +
        'postal INT(5),' +
        'country VARCHAR(50),' +
        'phone VARCHAR(16),' +
        'phone2 VARCHAR(16),' +
        'guardian VARCHAR(255)' +
    ')');

    db.query('CREATE TABLE classes (' +
        '_kp_class INTEGER PRIMARY KEY,' +
        '_kf_teacher INT(10),' +
        '_kf_workers TEXT,' +
        'description TEXT,' +
        'class_type VARCHAR(255)' +
    ')');

    db.query('CREATE TABLE attendance (' +
        '_kp_attendance INTEGER PRIMARY KEY,' +
        '_kf_class INT(10),' +
        '_kf_member TEXT,' +
        'description TEXT,' +
        'class_type VARCHAR(255),' +
        'year INT(4)' +
    ')');

    var data = req.body,
        salt = rand(4096, 36),
        password = crypt.hashPass(data.password, salt).toString('hex');

    var metaQuery = 'INSERT INTO meta ' +
                    '(name_org, tagline, address_1, address_2, city, state, postal, country, phone)VALUES (?)',
        userQuery = 'INSERT INTO users (email, password, salt, name_first, name_last, role) VALUES (?)',
        metaVals = {
            name_org: data.name_org,
            tagline: data.tagline,
            address_1: data.address_1,
            address_2: data.address_2,
            city: data.city,
            state: data.state,
            postal: data.postal,
            country: data.country,
            phone: data.phone    
        },
        userVals = {
            email: data.email,
            password: password,
            salt: salt,
            name_first: data.name_first,
            name_last: data.name_last,
            role: 1
        };
    db.query(metaQuery, metaVals, function() {

    });
    db.query(userQuery, userVals, function() {

    });
    res.send({
        success: true
    });
    db.end();
};
