var mongoose = require("mongoose");

var WorkoutSchema = new mongoose.Schema({
  sport: String,
  distance: Number,
  units: String,
  date: Date,
  comments: String
});

module.exports = mongoose.model("Workout", WorkoutSchema);
