var express = require('express');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/training");

var app = express();
var port = process.env.PORT || 3000;

var workoutRouter = require(__dirname + '/routes/workouts_routes');

app.use('/api', workoutRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('server up on port: ' + port);
});
