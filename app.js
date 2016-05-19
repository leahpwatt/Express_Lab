var express = require("express");
var app = express(); //express is exporting a function
var getQuotes = require("./quotes");
var quotes = require("./quotes");

app.get("/quotes", function(req, res){ //when a get request comes in to this end point,...
	res.send(getQuotes()); //do this
});

app.get("/all/quotes", function(req, res){ 
	res.send(quotes); 
});

var server = app.listen(8000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("it's working");
});