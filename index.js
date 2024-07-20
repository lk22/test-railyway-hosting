const express = require('express');
const app = express();

app.get('/', function(req, res) {
	return res.send('<h1>Hello From Railway</h1><h2>Im a new headline</h2>');
})

app.listen(3000, function(){
	console.log("listening on port 3000");
})
