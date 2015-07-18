// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var attendanceSchema = new Schema({
    date : {type : 'Date'},
    class_id : {type : Number},
    member_id : {type : Number},
    _id: {type : Number}
}, {collection : "attendance"});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Attendance', attendanceSchema);