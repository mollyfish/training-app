var mongoose = require("mongoose");

var WorkflowSchema = new mongoose.Schema({
  name: String,
  steps: {},
  coderID: String,
  category: String,
  level: String
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
