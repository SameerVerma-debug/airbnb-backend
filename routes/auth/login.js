const express = require('express');
const handleLogin = require('../../controller/loginController');
const router = express.Router();

router.post("/",handleLogin);

module.exports = router;