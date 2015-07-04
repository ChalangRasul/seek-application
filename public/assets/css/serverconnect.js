var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;


var server = new Server('mongodb://SeekAdmin:seekadmin15@ds047732.mongolab.com:47732/heroku_gw73z0lf', 12345, {auto_reconnect : true});
var db = new Db('db-name', server);


db.open(function(err, client) {
    client.authenticate('SeekAdmin', 'seekadmin15', function(err, success) {
        console.log('Success');
    });
});