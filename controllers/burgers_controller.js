var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burgers.read(function(data) {
        res.render('index.handlebars', { burgers: data });
    });
});

router.post("/", function(req, res) {
    console.log(req.body.burger_name);
    burgers.create(req.body.burger_name);
    res.redirect("/");
});



// Export routes for server.js to use.
module.exports = router;
