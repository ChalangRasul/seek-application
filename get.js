var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysql'
});
var app = express();

var queryString = "describe Persons";

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... \n\n");  
// } else {
//     console.log(err);  
// }
// });

// app.get("/",function(req,res){
  connection.query(queryString, function(err, rows, fields) {
  connection.end();
    if (!err)
      console.log('The solution is: ', rows[0]);
    else
      console.log('Error while performing Query.');
  });
// });

app.listen(3000);