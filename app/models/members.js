'use strict';

// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memberSchema = new Schema({
    name_first: { type: String, default: '' },
    name_last: { type: String, default: '' },
    birthdate: { type: Date },
    address: { type: String, default: '' },
    address2: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    phone: { type: String, default: '' },
    phone2: { type: String, default: '' },
    guardian: { type: String, default: '' },
    g_relationship: { type: String, default: '' },
    member_class_id: { type: Number },
    _id: { type: Number }
}, { collection: 'members' });

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Members', memberSchema);
