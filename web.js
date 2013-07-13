var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(fs.readFile('~/bitstarter/index.html', function (err, data) {
  if (err) throw err;
});

app.get('/', function(request, response) {
  response.send(buffer.ToString(data));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
