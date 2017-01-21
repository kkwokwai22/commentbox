// first we import our dependencies; 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// create our instances
var app = express();
var router = express.Router();



app.get('/', function(req, res){
	res.send('hi')
});


app.listen(3000);

