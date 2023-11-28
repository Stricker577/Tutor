const express = require ('express');
const controller = require('../controllers/navController');
const router = express.Router();

//GET /Index: login page
router.get('/index', controller.index);

//GET /Index: about page
router.get('/about', controller.about);

//GET /Index: contact page
router.get('/contact', controller.contact);

//GET /Index: home page
router.get('/home_page', controller.home_page);

//GET /Index: students page
router.get('/students', controller.students);

//GET /Index: appointments page
router.get('/appointments', controller.appointments);

//GET /Index: create account page
router.get('/create_account', controller.create_account);

//GET /Index: add appointment
router.get('/add_appointment', controller.add_appointment);

//GET /Index: add_student
router.get('/add_student', controller.add_student);

module.exports = router;