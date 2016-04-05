var mongoose = require("mongoose");

var WorkflowSchema = new mongoose.Schema({
  name: String,
  step1: String,
  step2: String,
  step3: String,
  step4: String,
  step5: String,
  coderID: String,
  category: String,
  lang: String,
  level: String,
  difficulty: String,
  rating: String,
  time: String,
  tags: String
});

module.exports = mongoose.model("Workflow", WorkflowSchema);
