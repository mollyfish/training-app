require('../app');

(function () {
  "use strict";

  angular.module("training").controller("WorkoutCtrl", ["WorkoutsService", "$routeParams", "$location", function (WorkoutsService, $routeParams, $location) {
    var vm = this;

    vm.workouts = [];
    vm.delete = deleteWorkout;

    initialize();

    function initialize() {
      WorkoutsService
        .get($routeParams.workout_id)
        .then(function (resp) {
          vm.workout = resp.data;
        });
    }



    function deleteWorkout (workout) {
      console.log('workout' + workout);
      WorkoutsService.delete(workout).then(function () {
        console.log('deleted');
        $location.path("/workouts");
      });
    }
  }]);
}());
