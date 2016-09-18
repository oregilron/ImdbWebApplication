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

console.log('Server running at http://127.0.0.1:8081/');

app.use('/movies', movies );

app.listen(8081);



















