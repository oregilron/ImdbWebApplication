var path = require('path')
var express = require('express')
var bodyParser = require( 'body-parser' );
var app = express();
var movies = require('./movies');
app.use(express.static((path.join(__dirname,'..'))));
app.use( bodyParser.json())
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'../html/imdb.html'))
})

console.log('Server running at http://127.0.0.1:3000/');

app.get('/movies', function (req, res) {

var resArray = [
{ name: "Superman", janner: "Action", time: "90min" },
{ name: "Batman", janner: "Action", time: "102min" },
{ name: "Spiderman", janner: "Thriller", time: "110min" },
{ name: "Xmen", janner: "Science Fiction", time: "96min" },
{ name: "Wonder-woman", janner: "Comix", time: "90min" },
{ name: "Django", janner: "Drama", time: "180min" },
{ name: "superman", janner: "action", time: "90min" },
{ name: "superman", janner: "action", time: "90min" },
{ name: "superman", janner: "action", time: "90min" },
];

res.send(resArray);

})

app.use('/movies', movies );

app.listen(8081);






// express


















