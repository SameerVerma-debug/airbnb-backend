const express = require("express");
const Accommodation = require("../model/Accommodation");
const handleSearchAccommodationsQuery = require("../controller/getSearchedAccommodations");
const router = express.Router();

router.get("/:searchQuery",handleSearchAccommodationsQuery)

module.exports = router;