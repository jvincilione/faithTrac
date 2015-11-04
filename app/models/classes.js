// grab the mongoose module
// classes encompass all types of groups
// IE: busses, ss classes, master clubs classes, etc.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var classSchema = new Schema({
    name: { type: String, default: '' },
    type: { type: String, default: '' },
    _id: { type: Number }
}, { collection: 'classes' });

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Classes', classSchema);
