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

  angular.module("training").filter('thisWeek', [function() {
    return function (workouts) {
      var filtered_list = [];
      for (var i = 0; i < workouts.length; i++) {
        var monday = new Date();
        var sunday = new Date(monday.getFullYear(),monday.getMonth(),monday.getDate() + (8 - monday.getDay())); 
        var workoutDate = new Date(workouts[i].date);
        if (monday <= workoutDate && workoutDate <= sunday) {
          filtered_list.push(workouts[i]);
        }
      }
      return filtered_list;
    }
  }]);

  angular.module("training").filter('week2', [function() {
    return function (workouts) {
      var filtered_list = [];
      for (var i = 0; i < workouts.length; i++) {
        var today = new Date();
        var monday = new Date(today.getFullYear(),today.getMonth(),today.getDate() + (8 - today.getDay()));
        var sunday = new Date(monday.getFullYear(),monday.getMonth(),monday.getDate() + (8 - monday.getDay())); 
        var workoutDate = new Date(workouts[i].date);
        if (monday <= workoutDate && workoutDate <= sunday) {
          filtered_list.push(workouts[i]);
        }
      }
      return filtered_list;
    }
  }]);

  angular.module("training").filter('week3', [function() {
    return function (workouts) {
      var filtered_list = [];
      for (var i = 0; i < workouts.length; i++) {
        var today = new Date();
        var monday1 = new Date(today.getFullYear(),today.getMonth(),today.getDate() + (8 - today.getDay()));
        var monday2 = new Date(monday1.getFullYear(),monday1.getMonth(),monday1.getDate() + (8 - monday1.getDay()));
        var sunday = new Date(monday2.getFullYear(),monday2.getMonth(),monday2.getDate() + (8 - monday2.getDay())); 
        var workoutDate = new Date(workouts[i].date);
        if (monday2 <= workoutDate && workoutDate <= sunday) {
          filtered_list.push(workouts[i]);
        }
      }
      return filtered_list;
    }
  }]);
}());
