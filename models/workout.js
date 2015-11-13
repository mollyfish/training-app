var mongoose = require("mongoose");

var WorkoutSchema = new mongoose.Schema({
  swim: Boolean,
  bike: Boolean,
  run: Boolean,
  xtrain: Boolean,
  rest: Boolean,
  sport: String,
  distance: Number,
  units: String,
  date: Date,
  time: String,
  comments: String
});

module.exports = mongoose.model("Workout", WorkoutSchema);
