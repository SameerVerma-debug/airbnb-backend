const express = require("express");
const handleAddAccommodation = require("../controller/addAccommodationController");
const handleGetAccommodation = require("../controller/getAccommodationController");
const handleEditAccommodation = require("../controller/editAccommodationController");
const handleGetUserAccommodations = require("../controller/getUserAccommodationsController");
const router = express.Router();

router
  .route("/")
  .get(handleGetUserAccommodations)
  .post(handleAddAccommodation)
  .put(handleEditAccommodation);


module.exports = router;
