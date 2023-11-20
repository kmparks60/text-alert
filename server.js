const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/test', (req,res) => {
	res.json({message: 'Connection Successful'})
})

app.listen(3000, () => {
	console.log('Server is running on port 3000');
  });