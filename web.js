var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

var buff = new Buffer(128);
buff = fs.readFileSync('index.html');
var str1 = buff.toString();
// console.log(str1 + "\n");
response.send(str1);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
