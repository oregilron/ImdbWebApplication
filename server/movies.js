var express = require('express');

var movies = express();

movies.post('/', function (req, res) {
//var x = JSON.parse(req);
//console.log(x);
var temp = req.length;
console.log(req.body)
res.send("working");

})

module.exports = movies;