var connection = require("../config/connection.js");

var burger = {
    read: function() {
        connection.query("SELECT * from burgers", function(err, res) {
            console.log(res);
        });

    }
};
module.exports = burger;
