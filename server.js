var express = require('express');
var methodOverride = require('method-override');
var app = express();
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
require('./config/connection.js')(app);
var PORT = process.env.PORT || 3000;

// Starts listening on localhost:3000 or the enviromental port.
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
