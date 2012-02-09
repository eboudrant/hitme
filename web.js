var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-control': 'no-store'
    });
    //var randomTimeout = Math.floor(Math.random() * 500);
    var randomTimeout = 100;
    //console.log('accepting (' + randomTimeout + 'msec)...');
    setTimeout(function() {
        response.end('Hello World! (' + randomTimeout + 'msec)');
    }, randomTimeout);
});

var port = process.env.PORT || 7000;
app.listen(port, function() {
    console.log("Listening on " + port);
});