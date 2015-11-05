// Load required packages
var mongoose = require("mongoose");

// Define our teams schema
var WorkoutSchema = new mongoose.Schema({
  sport: String,
  distance: Number,
  units: String,
  date: Date,
  comments: String
});

// Export the Mongoose model
module.exports = mongoose.model("Workout", WorkoutSchema);
