var mongoose = require("mongoose");

var WorkflowSchema = new mongoose.Schema({
  taskName: String,
  steps: {},
  coderID: String,
  category: String
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
