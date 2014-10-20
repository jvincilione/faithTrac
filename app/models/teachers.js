// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teacherSchema = new Schema({
    name_first : {type : String, default: ''},
    name_last : {type : String, default: ''},
    _id: {type : Number}
}, {collection : "teachers"});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Teachers', teacherSchema);