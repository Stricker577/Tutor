const AppointmentModel = require('../models/appointments');

//code to create a new entry using students save function
exports.create = (req, res, next) => {
    let model = AppointmentModel;
    let appointment = new model(req.body);
    appointment.author = req.session.user;
    appointment.save()
    .then(appointment=>res.redirect('/appointments'))
    .catch(err=>{
        if(err.name === 'ValidationError') {
            err.status = 400;
        }
        next(err);
    });
};
 
exports.getAllAppointments = async (req, res, next) => {
    try {
        const appointments = await AppointmentModel.find().populate('student'); // Fetch all appointments
        res.render('navigation/appointments', { appointments }); // Pass them to the view
    } catch (error) {
        next(error);
    }
};


//TODO : Edit functionality
//exports.edit = (req, res, next) => {

//};


//TODO : Update functionality
//exports.update = (req, res, next) => {

//};

//TODO : Delete functionality
//exports.delete = (req, res, next) => {

//};