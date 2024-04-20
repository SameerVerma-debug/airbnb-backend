const express = require('express');
const handleProfile = require('../controller/profileController');
const router = express.Router();

router.get("/",handleProfile)

module.exports = router;