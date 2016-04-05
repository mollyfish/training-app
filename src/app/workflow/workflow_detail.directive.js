require('../app');

(function() {
  "use strict";

  angular.module("training").directive("workoutDetails", function () {
    return {
      scope: {
        workout: "=workout",
      },
      templateUrl: 'views/workout/workout_detail.html',
    };
  });
}());
