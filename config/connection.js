// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localrnr56s6e2uk326pj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "u1absro7yu11hpfn",
  password: "tau2batm1au38lst",
  database: "fuenogj8pn6tuijh"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
