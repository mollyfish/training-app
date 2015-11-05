require('../app');

(function () {
  "use strict";
  angular.module("training").controller("WorkoutFormCtrl", ["WorkoutsService", "$routeParams", "$location", function (WorkoutsService, $routeParams, $location) {
    var vm = this;

    vm.save = saveForm;

    vm.workout = {};

    initialize();

    function initialize () {
      vm.workout.date = new Date();
      if ($routeParams.workout_id) {
        WorkoutsService.get($routeParams.workout_id).then(function (resp) {
          vm.workout = resp.data;
          vm.workout.date = vm.workout.date || new Date();
        });
      }

    }

    function saveForm () {
      var method;

      method = $routeParams.workout_id ? "update" : "create";
      WorkoutsService[method](vm.workout).then(function (resp) {
        $location.path("/workouts/" + resp.data._id);
      });
    }
  }]);
}());
