var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var workoutSchema = new Schema({
	sport: String,
  date: Date,
  distance: Number,
  units: String,
  location: String,
  notes: String,
  completed: Boolean
});

module.exports = mongoose.model('Workout', workoutSchema, 'Workout');
