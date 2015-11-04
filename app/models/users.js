'use strict';
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name_first: { type: String, default: '' },
    name_last: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    salt: { type: String, default: '' },
    role: { type: Number, default: '3' }, // 1 = superuser, 2 = admin, 3 = teacher
    class_id: [], // this is for teachers only - teacher user type can be in multiple classes
    member_class_id: { type: Number }, // a teacher/user can also be a member
    _id: { type: Number }
}, { collection: 'users' });

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Users', userSchema);
