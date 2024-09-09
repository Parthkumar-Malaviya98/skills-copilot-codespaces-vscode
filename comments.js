//Create web server
var express = require('express');
var app = express();

//create a route
app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('Server listening on port 3000');
});
//run server with node comments.js