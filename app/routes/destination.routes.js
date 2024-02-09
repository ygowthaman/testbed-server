var express = require('express');
var router = express.Router();

var destinationController = require('../controller/destination.controller');

// Country page route.
router.get('/', destinationController.getAll);

module.exports = router;