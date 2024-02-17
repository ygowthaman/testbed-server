var express = require("express");
var router = express.Router();

var countryController = require("../controller/country.controller");

// Country page route.
router.get("/", countryController.getAll);
router.get("/:id", countryController.get);
router.post("/create", countryController.create);
router.put("/:id", countryController.update);
router.delete("/:id", countryController.delete);

module.exports = router;
