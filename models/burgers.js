var connection = require("../config/connection.js");

var burger = {
    read: function(cb) {
        connection.query("SELECT * from burgers", function(err, res) {
            cb(res);
        });
    },
    create: function(name) {
        connection.query("INSERT INTO `burgers` (`id`, `burger_name`, `devoured`, `data`) " +
            "VALUES (NULL, '" + name + "', FALSE, CURRENT_TIMESTAMP);",
            function(err, res) {
                if (err) throw err;
            });
    }

};

module.exports = burger;
