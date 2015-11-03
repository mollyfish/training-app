require('angular');
require('angular-route');

(function () {
  "use strict";

  var app = angular.module("training", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/workouts", {
      templateUrl: "views/workouts/workouts_list.html",
      controller: "WorkoutsCtrl as vm",
    })
    .when("/workouts/new", {
      templateUrl: "views/workout/workout_form.html",
      controller: "WorkoutFormCtrl as vm",
    })
    .when("/workouts/:workout_id/edit", {
      templateUrl: "views/workout/workout_form.html",
      controller: "WorkoutFormCtrl as vm",
    })
    .when("/workouts/:workout_id", {
      templateUrl: "views/workout/workout_detail.html",
      controller: "WorkoutCtrl as vm",
    })
    .otherwise({
      redirectTo: "/workouts",
    });
  }]);

  app.controller('DateCtrl', ['$scope', function($scope) {
      $scope.date = new Date();
    }
  ]);
}());


require('./index.js');
