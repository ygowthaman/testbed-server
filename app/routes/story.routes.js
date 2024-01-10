var express = require('express');
var router = express.Router();

var story_controller = require('../controller/story.controller');

// Story page route.
router.get('/', story_controller.getAll);

router.get('/:id', story_controller.get);

router.post('/create', story_controller.create);

router.put('/:id/update', story_controller.update);

router.delete('/:id/delete', story_controller.delete);

module.exports = router;