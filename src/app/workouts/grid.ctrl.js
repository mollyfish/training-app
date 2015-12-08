require('../app');

(function () {
  "use strict";

  angular.module("training").controller("GridCtrl", ["WorkoutsService", function (WorkoutsService) {
    var vm = this;

    vm.workouts = [];
    vm.delete = deleteWorkout;

    initialize();

    function initialize () {
      getWorkouts();
    }

    function getWorkouts () {
      WorkoutsService.get().then(function (resp) {
        vm.workouts = resp.data;
      });
    }

    function deleteWorkout (workout) {
      WorkoutsService.delete(workout).then(function () {
        getWorkouts();
      });
    }

  }]);
}());
