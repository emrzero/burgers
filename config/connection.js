var mysql = require("mysql");

var db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "dev", //Your username
    password: "^312ag420QbG", //Your password
    database: "burgers_db",
    debug: false
});

// db.connect(function(err) {
//     if (err) {console.log(err)};
// });
//
//
// db.query("SELECT * FROM actors ORDER BY id", function(error, rows, fields) {
//     if(error) throw error;
//   });

  // db.end();

module.exports = mysql;
module.exports = db;
