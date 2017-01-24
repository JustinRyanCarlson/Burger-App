var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burgers.read();
});



// Export routes for server.js to use.
module.exports = router;
