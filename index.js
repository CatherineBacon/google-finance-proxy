var express = require('express');
var googleFinance = require('google-finance');

var app = express();

app.get('/', function(req, res) {
	res.send('Hello world!')
});

app.get('/historical', function(req, res) {
	res.set("Access-Control-Allow-Origin", "*");

	var today = (new Date()).toISOString().split('T')[0]

	var symbols = req.query.symbols;
	var from = req.query.from || '2001-01-01';
	var to = req.query.to || today;

	if(!symbols) return res.status(404).json({ error: 'symbols is required' })

	googleFinance.historical({
		symbols: symbols.split(','),
		from: from,
		to: to
	}, function(err, data) {
		if(err) return res.status(500).json({ error: err });
		res.json(data);
	});
})

app.listen(process.env.PORT || 3001)