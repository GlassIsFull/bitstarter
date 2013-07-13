#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(128);
fs.readFile('~/bitstarter/index.html', function (err, data) {
  app.get('/', function(request, response) {
     response.send(buffer.ToString(data));
  });
console.log("after readFile");
});

// app.get('/', function(request, response) {
  // response.send(buffer.ToString(data));
// });

//var port = process.env.PORT || 5000;
//app.listen(port, function() {
//  console.log("Listening on " + port);
//});
