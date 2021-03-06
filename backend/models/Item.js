const mongoose = require('mongoose');
var dataTables = require('mongoose-datatables');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const ItemSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: false,
    },
    tags: {
        type: Array,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
    createdAt: { 
        type: Date, required: true, default: Date.now 
    },

})
ItemSchema.plugin(dataTables);
module.exports = mongoose.model('Item',ItemSchema);