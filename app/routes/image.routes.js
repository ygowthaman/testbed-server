var express = require('express');
var router = express.Router();

var imageController = require('../controller/image.controller');

// Country page route.
router.get('/', imageController.getAll);

module.exports = router;