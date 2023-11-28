const express = require ('express');
const controller = require('../controllers/appointController');
const {validateId, validateResult, validateAppointment} = require('../middlewares/validator');

const router = express.Router();

//GET /views: displays the items information
router.get('/add-appointment/:id', validateId, controller.appointInfo);

//POST /views: create a new story
router.post('/add-appointment', validateResult, validateAppointment, controller.create);

//GET /views/:id/edit: edit an item
//router.get('/add-appointment/edit', validateId, controller.edit);

//PUT /views/:id: update an item
//router.put('/add-appointment/update', validateId, validateResult, validateAppointment, controller.update);

//DELETE /views/:id: delete an item
//router.delete('/add-appointment/delete', validateId, controller.delete);

module.exports = router;