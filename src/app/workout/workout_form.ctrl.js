require('../app');

(function () {
  "use strict";
  angular.module("training").controller("WorkoutFormCtrl", ["WorkoutsService", "$routeParams", "$location", function (WorkoutsService, $routeParams, $location) {
    var vm = this;
    vm.save = saveForm;
    vm.workout = {};
    vm.change = resetFalsy;

    initialize();

    function initialize () {
      vm.workout.date = new Date();
      if ($routeParams.workout_id) {
        WorkoutsService.get($routeParams.workout_id).then(function (resp) {
          vm.workout = resp.data;
          vm.workout.date = new Date(vm.workout.date) || new Date();
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

    function resetFalsy (sport) {
      console.log('you chose ' + sport);
      vm.workout.swim = false;
      vm.workout.bike = false;
      vm.workout.run = false;
      vm.workout.xtrain = false;
      vm.workout.rest = false;
      switch (sport) {
        case "swim":
          vm.workout.swim = true;
          break;
        case "bike":
          vm.workout.bike = true;
          break;
        case "run":
          vm.workout.run = true;
          break;
        case "xtrain":
          vm.workout.xtrain = true;
          break;
        default:
          vm.workout.rest = true;
      }
      console.log('---------------');
    }
  }]);
}());
