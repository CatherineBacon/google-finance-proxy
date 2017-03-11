var express = require('express');
var googleFinance = require('google-finance');

var app = express();

app.get('/', function(req, res) {
	res.send('Hello world!')
});

app.get('/historical', function(req, res) {
	googleFinance.historical({
		symbols: ['AAPL', 'XOM'],
		from: '2014-01-01',
		to: '2014-01-31'
	}, function(err, data) {
		if(err) return res.status(500).json({ error: err });
		res.json(data);
	});
})

app.listen(process.env.PORT || 3001)