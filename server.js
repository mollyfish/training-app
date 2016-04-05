var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Workflow = require("./models/workflow");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/blog")

var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

app.use(bodyParser.json());

// Root route
router.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/app/index.html");
});

// All assets
app.use(express.static(__dirname + "/public"));

// Register the router with the application
app.use("/", router);

// Create a new route with prefix /workflows
var workflowsRoute = router.route("/api/workflows");

// READ

// Create endpoint /api/workflows for WORKFLOW
workflowsRoute.post(function (req, res) {
  // Create a new instance of the Workflow model
  var workflow = new Workflow();

  // Set the workflow properties that came from the WORKFLOW data
  workflow.name = req.body.name;
  workflow.category = req.body.category;
  // workflow.steps = req.body.steps;
  workflow.tags = req.body.tags;
  workflow.step1 = req.body.step1;
  workflow.step2 = req.body.step2;
  workflow.step3 = req.body.step3;
  workflow.step4 = req.body.step4;
  workflow.step5 = req.body.step5;
  workflow.lang = req.body.lang;
  workflow.difficulty = req.body.difficulty;
  workflow.rating = req.body.rating;
  workflow.time = req.body.time;
  // workflow.run = req.body.run;
  // workflow.xtrain = req.body.xtrain;
  // workflow.rest = req.body.rest;
  // workflow.sport = req.body.sport;
  // workflow.distance = req.body.distance;
  // workflow.units = req.body.units;
  

  // Save the workflow and check for errors
  workflow.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json(workflow);
  });
});

// Create endpoint /api/workflows for GET
workflowsRoute.get(function(req, res) {
  // Use the Workflow model to find all workflows
  Workflow.find(function (err, workflows) {
    if (err) {
      res.send(err);
    }

    res.json(workflows);
  });
});

// CREATE

// Create a new route for /workflows/:workflow_id
var workflowRoute = router.route("/api/workflows/:workflow_id");


// Create endpoint for /api/workflows/:workflowID
workflowRoute.get(function(req, res) {
  // Use the workflow model to find a specific workflow
  Workflow.findById(req.params.workflow_id, function (err, workflow) {
    if (err) {
      res.send(err);
    }

    res.json(workflow);
  });
});

// UPDATE

// Change the workflow's stuff
workflowRoute.put(function(req, res) {
  // Use the Workflow model to find a specific workflow
  Workflow.findById(req.params.workflow_id, function (err, workflow) {
    if (err) {
      res.send(err);
    }

    workflow.name = req.body.name;
    workflow.category = req.body.category;
    // workflow.steps = req.body.steps;
    workflow.tags = req.body.tags;
    workflow.step1 = req.body.step1;
    workflow.step2 = req.body.step2;
    workflow.step3 = req.body.step3;
    workflow.step4 = req.body.step4;
    workflow.step5 = req.body.step5;
    workflow.lang = req.body.lang;
    workflow.difficulty = req.body.difficulty;
    workflow.rating = req.body.rating;
    workflow.time = req.body.time;
    // workflow.run = req.body.run;
    // workflow.xtrain = req.body.xtrain;
    // workflow.rest = req.body.rest;
    // workflow.sport = req.body.sport;
    // workflow.distance = req.body.distance;
    // workflow.units = req.body.units;
    

    // Save the workflow and check for errors
    workflow.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json(workflow);
    });
  });
});

// DELETE

// Create endpoint /api/workflows/:workflow_id for DELETE
workflowRoute.delete(function (req, res) {
  // Use the workflow model to find a specific workflow and remove it
  Workflow.findByIdAndRemove(req.params.workflow_id, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "Successfully removed workflow." });
  });
});

app.listen(port);
console.log('server is running on localhost:' + port);
