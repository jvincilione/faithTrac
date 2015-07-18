"use strict";
// grab the mongoose module
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var infoSchema = new Schema({
    title : {type : String, default: ""},
    tagline : {type : String, default: ""},
    _id: {type : Number}
}, {collection : "info"});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model("Info", infoSchema);