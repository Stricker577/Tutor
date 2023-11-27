const express = require ('express');
const controller = require('../controllers/navController');
const router = express.Router();

//GET /Index: home page
router.get('/', controller.index);

//GET /Index: about page
router.get('/about', controller.about);

//GET /Index: contact page
router.get('/contact', controller.contact);

//GET /Index: about page
router.get('/home_page', controller.home_page);

//GET /Index: students page
router.get('/students', controller.students);

//GET /Index: appointments page
router.get('/appointments', controller.appointments);

//GET /Index: profile page
router.get('/profile', controller.profile);

//GET /Index: profile page
router.get('/create_account', controller.create_account);

module.exports = router;