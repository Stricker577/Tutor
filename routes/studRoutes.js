const express = require ('express');
const controller = require('../controllers/studController');

const router = express.Router();

//GET /views: displays the items information
router.get('/add-student', controller.studentInfo);

//POST /views: create a new story
router.post('/add-student', controller.create);

//GET /views/:id/edit: edit an item
router.get('/add-student', controller.edit);

//PUT /views/:id: update an item
router.put('/add-student', controller.update);

//DELETE /views/:id: delete an item
router.delete('/add-student', controller.delete);

module.exports = router;