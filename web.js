#!/usr/bin/env node
var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(128);
buffer=fs.readFile('~/bitstarter/index.html'); 
//     response.send(buffer.ToString(data));

console.log("Buffer:"+buffer);


