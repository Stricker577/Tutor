const StudentModel = require('../models/students');

//code to create a new entry using students save function
exports.create = (req, res, next) => {
    let model = StudentModel;
    let student = new model(req.body);
    student.author = req.session.user;
    student.save()
    .then(student=>res.redirect('/students'))
    .catch(err=>{
        if(err.name === 'ValidationError') {
            err.status = 400;
        }
        next(err);
    });
};

exports.getAllStudents = async (req, res, next) => {
    try {
        const students = await StudentModel.find(); // Fetch all students
        res.render('navigation/students', { students }); // Pass them to the view
    } catch (error) {
        next(error);
    }
};


/*
//TODO : Edit functionality
exports.edit = (req, res, next) => {

};


//TODO : Update functionality
exports.update = (req, res, next) => {

};

//TODO : Delete functionality
exports.delete = (req, res, next) => {

};*/