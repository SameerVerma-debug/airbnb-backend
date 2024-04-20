const express = require("express");
const handleRegister = require("../../controller/registerController");
const router = express.Router();

router.post("/", handleRegister);
module.exports = router;
