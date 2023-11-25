const StudentModel = require('../models/students');

//code to get each individual entry by ID that is provided
exports.studentInfo = (req, res, next) => {
    let id = req.params.id;
    let model = StudentModel;
    model.findById(id).populate('name', 'firstName lastName')
    .then(student=>{
        if(student){
            return res.render('navigation/students', { student });
        } else {
            let err = new Error('Cannot find an item with id ' + id);
            err.status = 500;
            next(err);
        }
    })
    .catch(err=>next(err));
};

//code to create a new entry using students save function
exports.create = (req, res, next) => {
    let model = StudentModel;
    let student = new model(req.body);
    student.author = req.session.user;
    student.save()
    .then(student=>res.redirect('/navigation/students'))
    .catch(err=>{
        if(err.name === 'ValidationError') {
            err.status = 400;
        }
        next(err);
    });
};


//TODO : Edit functionality
exports.edit = (req, res, next) => {

};


//TODO : Update functionality
exports.update = (req, res, next) => {

};

//TODO : Delete functionality
exports.delete = (req, res, next) => {

};