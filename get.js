var express    = require("express");
var mysql      = require('mysql');
var http       = require('http');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mysql'
});
var app = express();

var queryString = "CREATE TABLE Patients(id integer, email string)";

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... \n\n");
// } else {
//     console.log(err);
// }
// });

http.createServer(function (req, res) {
    connection.query(queryString, function(err, rows, fields) {
      if (!err) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(buildHTML(queryString,rows[0]));
          res.end();
          connection.end();
        }
      else {
          console.log(err);
      }
    }
    // setTimeout(function(){
    //     res.end('World\n')},
    //     2000);
  )
}).listen(1337);
console.log('Server running at local host 1337/');


// External- dependent functions
function buildHTML(queryData,data) { // Build whatever HTML
    var rowInfo = data;
    // for (var i in rows){
    //   rowInfo += rows[i];
    //   rowInfo += ' ';
    // }
    var html = '<p><b>Query: ' + queryData + '</b></p> With data: <p><b>' + rowInfo + '</b></p>';
    return html;              // The function returns the product of p1 and p2
}

app.listen(3000);
