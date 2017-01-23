var express = require('express');
var methodOverride = require('method-override');
var app = express();
var bodyParser = require('body-parser');
require('./config/connection.js')(app);
var PORT = process.env.PORT || 3000;

// Starts listening on localhost:3000 or the enviromental port.
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});
