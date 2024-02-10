var express = require('express');
var router = express.Router();

var destinationController = require('../controller/destination.controller');

// Country page route.
router.get('/', destinationController.getAll);
router.get('/country/:id', destinationController.getByCountry);

module.exports = router;