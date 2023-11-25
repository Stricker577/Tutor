const express = require ('express');
const controller = require('../controllers/studController');
const {validateId, validateResult, validateStudent} = require('../middlewares/validator');

const router = express.Router();

//GET /views: displays the items information
router.get('/add-student', validateId, controller.studentInfo);

//POST /views: create a new story
router.post('/add-student', validateResult, validateStudent, controller.create);

//GET /views/:id/edit: edit an item
router.get('/add-student', validateId, controller.edit);

//PUT /views/:id: update an item
router.put('/add-student', validateId, validateResult, validateStudent, controller.update);

//DELETE /views/:id: delete an item
router.delete('/add-student', validateId, controller.delete);

module.exports = router;