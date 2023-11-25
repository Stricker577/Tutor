const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId, 
        ref: 'Students',
        required: [true, 'Student is required']
    },
    courses: {type: String, required: [true, 'Courses are required']},
    date: {type: Date, required: [true, 'Date is required']},
    author: {type: Schema.Types.ObjectId, ref:'User'}
},
{timestamps: true, collection: 'Appointments'}
);

module.exports = mongoose.model('Appointments', AppointmentSchema);