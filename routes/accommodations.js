const express = require("express");
const Accommodation = require("../model/Accommodation");
const handleGetAccommodation = require("../controller/getAccommodationController");
const handleGetAccommodations = require("../controller/getAccommodations");
const router = express.Router();

router.route("/").get(handleGetAccommodations);

router.route("/:id").get(handleGetAccommodation);
module.exports = router;
