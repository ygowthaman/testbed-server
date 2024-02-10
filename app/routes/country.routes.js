var express = require('express');
var router = express.Router();

var countryController = require('../controller/country.controller');

// Country page route.
router.get('/', countryController.getAll);
router.get('/:id', countryController.get);
// router.get('/title/:title', story_controller.getByTitle);
// router.get('/author/:author', story_controller.getByAuthor);
// router.get('/private/:private', story_controller.getByPrivate);

// router.post('/create', story_controller.create);

// router.put('/:id/update', story_controller.update);

// router.delete('/:id/delete', story_controller.delete);

module.exports = router;