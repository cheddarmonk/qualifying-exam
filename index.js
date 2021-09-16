const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.get('/', function(req, res) {

    
    res.sendFile('/angular.html', { root: __dirname });
});

app.get('/user', function(req, res) {

    res.sendFile('/user.json', { root: __dirname });

});


app.get('/about', function(req, res) {

    res.sendFile('/README.md', { root: __dirname });

});

app.listen(process.env.PORT || 8888, function() {
    console.log('Listening on port 8888');
});