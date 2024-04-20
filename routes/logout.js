const express = require('express');
const handleLogout = require('../controller/logoutController');
const router = express.Router();

router.post("/",handleLogout)

module.exports = router;