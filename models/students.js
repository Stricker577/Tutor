const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {type: String, required: [true, 'Name is Required']},
    courses: {type: String, required: [true, 'Users are required']},
    email: {type: String, required: [true, 'Email is required']},
    author: {type: Schema.Types.ObjectId, ref:'User'},
},
{timestamps: true, collection: 'Students'}
);

module.exports = mongoose.model('Students', StudentSchema);