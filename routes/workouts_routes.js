var Workout = require(__dirname + '/../models/workout_model');
var express = require('express');
var jsonParser = require('body-parser').json();

// var handleRes = require(__dirname + '/../lib/handle_response');

var workoutRouter = module.exports = exports = express.Router();

workoutRouter.get('/workouts/:workout', function (req, res) {
  Workout.findOne({workout: req.params.workout}, function (err, data) {
    if (err) return (err, res);
    console.log('req.params', req.params);
    res.json({workout: req.params.workout});
  });
});
