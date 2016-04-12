var express = require('express')
var app = express()
var path = require('path')
var PORT = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, function() {
	console.log('app is listening on: ' + PORT)
})

