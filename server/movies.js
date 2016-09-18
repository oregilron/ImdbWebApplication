var express = require('express');

var movies = express();

movies.post('/', function (req, res) {

var rBody = req.body;
console.log(rBody);
res.send("working!");

})

movies.get('/', function (req, res) {

var resArray = [
{ name: "Superman", janner: "Action", time: "90min" },
{ name: "Batman", janner: "Action", time: "102min" },
{ name: "Spiderman", janner: "Thriller", time: "110min" },
{ name: "Xmen", janner: "Science Fiction", time: "96min" },
{ name: "Wonder-woman", janner: "Comix", time: "90min" },
{ name: "Django", janner: "Drama", time: "180min" },
];

res.send(resArray);

})

module.exports = movies;