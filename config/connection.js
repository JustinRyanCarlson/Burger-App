var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});


module.exports = function(app) {

    connection.connect(function(err) {
        if (err) throw err;

        connection.query("SELECT * FROM burgers", function(err, res) {

        });
    });
};
