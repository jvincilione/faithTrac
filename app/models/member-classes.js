"use strict";
// grab the mongoose module
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var memberClassSchema = new Schema({
    class_id : {type : Number},
    member_id : {type : Number}, // member_id can also be a user id
    year : {type : Number},
    type : {type : String, default : ""},
    _id: {type : Number}
}, {collection : "memberClasses"});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model("MemberClasses", memberClassSchema);