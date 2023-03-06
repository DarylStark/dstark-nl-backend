const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", function (req, res) {
    res.sendFile(__dirname + '/static/index.html')
});

module.exports = router;