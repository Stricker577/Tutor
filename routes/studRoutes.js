const express = require ('express');
const controller = require('../controllers/studController');

const router = express.Router();

//GET /views: displays the items information
router.get('/', controller.studentInfo);

//POST /views: create a new story
router.post('/', controller.create);

//GET /views/:id/edit: edit an item
router.get('/', controller.edit);

//PUT /views/:id: update an item
router.put('/', controller.update);

//DELETE /views/:id: delete an item
router.delete('/', controller.delete);

module.exports = router;