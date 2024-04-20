const express = require('express');
const handleFillAutoComplete = require('../controller/fillAutoComplete');
const router = express.Router();

router.get("/:searchTerm",handleFillAutoComplete);

module.exports = router;