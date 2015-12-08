var mongoose = require("mongoose");

var CalendarSchema = new mongoose.Schema({
  date: Date,
  day: String,
  number: Number
});

module.exports = mongoose.model("Calendar", CalendarSchema);
