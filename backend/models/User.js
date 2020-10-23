const mongoose = require('mongoose');
var dataTables = require('mongoose-datatables');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const UserSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})
UserSchema.plugin(dataTables);
module.exports = mongoose.model('User',UserSchema);
