var connection = require("../config/connection.js");

var burger = {
    read: function(cb) {
        connection.query("SELECT * from burgers", function(err, res) {
            cb(res);
        });
    }
};

module.exports = burger;
