var mongoose = require("mongoose");

var CoderSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Coder", CoderSchema);
