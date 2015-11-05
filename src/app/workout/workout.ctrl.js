require('../app');

angular.module("training").controller("WorkoutCtrl", ["WorkoutsService", "$routeParams", function (WorkoutsService, $routeParams) {
  var vm = this;

  initialize();

  function initialize() {
    WorkoutsService
      .get($routeParams.workout_id)
      .then(function (resp) {
        vm.workout = resp.data;
      });
  }
}]);
