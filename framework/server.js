var express = require('express');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Workout = require("./models/workout");

mongoose.connect("mongodb://localhost/blog")

var app = express();
var port = process.env.PORT || 3000;
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

// Create a new route with prefix /workouts
var workoutsRoute = router.route("/api/workouts");

// READ

// Create endpoint /api/workouts for WORKOUT
workoutsRoute.post(function (req, res) {
  // Create a new instance of the Workout model
  var workout = new Workout();

  // Set the workout properties that came from the WORKOUT data
  workout.sport = req.body.sport;
  workout.distance = req.body.distance;
  workout.units = req.body.units;
  workout.date = req.body.date;
  workout.comments = req.body.comments;

  // Save the workout and check for errors
  workout.save(function (err) {
    if (err) {
      res.send(err);
    }

    res.json(workout);
  });
});

// Create endpoint /api/workouts for GET
workoutsRoute.get(function(req, res) {
  // Use the Workout model to find all workouts
  Workout.find(function (err, workouts) {
    if (err) {
      res.send(err);
    }

    res.json(workouts);
  });
});

// CREATE

// Create a new route for /workouts/:workout_id
var workoutRoute = router.route("/api/workouts/:workout_id");


// Create endpoint for /api/workouts/:workoutID
workoutRoute.get(function(req, res) {
  // Use the workout model to find a specific workout
  Workout.findById(req.params.workout_id, function (err, workout) {
    if (err) {
      res.send(err);
    }

    res.json(workout);
  });
});

// UPDATE

// Change the workout's stuff
workoutRoute.put(function(req, res) {
  // Use the Workout model to find a specific workout
  Workout.findById(req.params.workout_id, function (err, workout) {
    if (err) {
      res.send(err);
    }

    // Update the workout's title
    workout.sport = req.body.sport;
    workout.distance = req.body.distance;
    workout.units = req.body.units;
    workout.date = req.body.date;
    workout.comments = req.body.comments;

    // Save the workout and check for errors
    workout.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json(workout);
    });
  });
});

// DELETE

// Create endpoint /api/workouts/:workout_id for DELETE
workoutRoute.delete(function (req, res) {
  // Use the workout model to find a specific workout and remove it
  Workout.findByIdAndRemove(req.params.workout_id, function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "Successfully removed workout." });
  });
});

app.listen(port);
console.log('server is running on localhost:' + port);
