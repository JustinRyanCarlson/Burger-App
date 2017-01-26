var connection = require("../config/connection.js");

var burger = {
    read: function(cb) {
        connection.query("SELECT * from burgers", function(err, res) {
            cb(res);
        });
    },
    create: function(name) {
        connection.query("INSERT INTO `burgers` (`id`, `" + name + "`, `devoured`, `data`) " +
            "VALUES (NULL, 'Triple Cheeseburger', FALSE, CURRENT_TIMESTAMP);",
            function(err, res) {

            });
    }

};

module.exports = burger;
