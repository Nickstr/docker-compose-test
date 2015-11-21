var express = require('express');
var app = express();
var r = require('rethinkdb');


var connection = null;
r.connect( {host: 'rethinkdb', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
})

app.get('/', function (req, res) {
    res.send('test 12!');
});

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});