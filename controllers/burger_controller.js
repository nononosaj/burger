/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var router = express.Router();
var burger = require('../models/burger.js');


// Redirects route to /burger
router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	burger.all(function(data){
		var hbsObject = {burger : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});


router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({'eaten' : req.body.eaten}, condition, function(data){
		res.redirect('/cats');
	});
});


module.exports = router;