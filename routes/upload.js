const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const handleUpload = require('../controller/uploadController');

const basePath = path.join(__dirname,"..","uploads/")

const photosMiddleware = multer({dest:basePath});

router.post("/",photosMiddleware.array('photos',100),handleUpload);

module.exports = router;