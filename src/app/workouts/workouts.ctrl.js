require('../app');

(function () {
  "use strict";

  angular.module("training").controller("WorkoutsCtrl", ["WorkoutsService", function (WorkoutsService) {
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

  angular.module("training").filter('upcomingEvents', [function() {
    return function (workouts) {
      var filtered_list = [];
      for (var i = 0; i < workouts.length; i++) {
        var today = new Date();
        var workoutDate = new Date(workouts[i].date);
        if (today <= workoutDate) {
          filtered_list.push(workouts[i]);
        }
      }
      return filtered_list;
    }
  }]);

  angular.module("training").filter('pastEvents', [function() {
    return function (workouts) {
      var filtered_list = [];
      for (var i = 0; i < workouts.length; i++) {
        var today = new Date();
        var workoutDate = new Date(workouts[i].date);
        if (today >= workoutDate) {
          filtered_list.push(workouts[i]);
        }
      }
      return filtered_list;
    }
  }]);
}());
