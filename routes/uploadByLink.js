const express = require('express');
const handleUploadByLink = require('../controller/uploadByLinkController');
const router = express.Router();


router.post("/",handleUploadByLink);

module.exports = router;
