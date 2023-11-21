const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    title: {type: String, required: [true, 'Name is Required']},
    students: {type: Array, required: [true, 'Users are required']}
},
{timestamps: true, collection: 'groups'}
);

module.exports = mongoose.model('groups', groupSchema);