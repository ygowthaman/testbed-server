var express = require('express');
var router = express.Router();

var landmarkController = require('../controller/landmark.controller');

// Country page route.
router.get('/', landmarkController.getAll);

module.exports = router;