var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./db');

app.use(express.static('../public'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('We are TechKnights. techknights.org');
});

// API
app.post('/api/mailinglist/subscribe', function(req, res) {
	database.query("INSERT INTO mailinglist SET ?", {
		email: req.body.email,
		time: Math.round((new Date).getTime() / 1000),
	}, function(err) {
		if (err) {
			console.log(err);
		}
		res.send(err ? "Error." : 200);
	});
});

app.listen(3002, function(){
	console.log('TechKnights Chivalry at localhost:3002');
});

