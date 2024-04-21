const express = require("express");
const router = express.Router();
const handleUpload = require("../controller/uploadController");

router.post("/", handleUpload);

module.exports = router;
