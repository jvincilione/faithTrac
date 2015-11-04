/* globals exports, require */
'use strict';
var crypt = require('crypto');

exports.hashPass = function(pass, salt) {
    if (typeof pass === 'undefined' || typeof salt === 'undefined') {
        return 'error';
    }
    return crypt.pbkdf2Sync(pass, salt, 15000, 512, 'sha256', function(err, key) {
        return key;
    });
};
