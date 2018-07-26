var express = require('express');
var app = express();
var hello = require('./hello');

var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.txt', { flags: 'a' });

app.use('/hello', hello)

app.get('/', function (req, res) {
    res.send('Hello. Your IP: ' + req.connection.remoteAddress.toString().split(':')[3]);

    logFile.write(new Date().toJSON()
     + ": " + req.connection.remoteAddress.toString().split(':')[3] +  '\n');

});

app.get('/hello', function (req, res) {
    res.send('hello world');
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});


// URL Building
app.get('/:id', function (req, res) {
    res.send("The id: " + req.params.id)
})

app.get('/things/:name/:id', function (req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

// Pattern Matched Routes
app.get('/things/:id([0-9]{5})', function (req, res) {
    res.send('id: ' + req.params.id);
});

//Other routes here
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
