const mongoose = require('mongoose');
var dataTables = require('mongoose-datatables');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const ItemSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: false,
    },
    tags: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    createdAt: { 
        type: Date, required: true, default: Date.now 
    },

})
ItemSchema.plugin(dataTables);
module.exports = mongoose.model('Item',ItemSchema);