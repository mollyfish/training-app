require('../app');

(function () {
  "use strict";
  
  var originalStart;
  var start;
  var mid;
  var end;
  var filtered_workout_list;

  function addWeeks(count, cb) {
    start = new Date();
    originalStart = start;
    end;
    for (var i = 0; i < count; i++) {
      end = new Date(start.getFullYear(),start.getMonth(),start.getDate() + (8 - start.getDay()));
      mid = start;
      start = end;
    }
  };

  function setDates(start, mid, end) {
    callback(start, mid, end);
  };

  function filter(workouts, weekNumber) {
    filtered_workout_list = [];
      addWeeks(weekNumber, setDates);
      for (var i = 0; i < workouts.length; i++) {
        var workoutDate = new Date(workouts[i].date);
        if (mid <= workoutDate && workoutDate < end) {
          filtered_workout_list.push(workouts[i]);
        }        
      }
    return filtered_workout_list;
  }

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
      return filter(workouts, 1);
    };
  }]);

  angular.module("training").filter('week2', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 2);
    };
  }]);

  angular.module("training").filter('week3', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 3);
    };
  }]);

  angular.module("training").filter('week4', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 4);
    };
  }]);

  angular.module("training").filter('week5', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 5);
    };
  }]);

  angular.module("training").filter('week6', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 6);
    };
  }]);

  angular.module("training").filter('week7', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 7);
    };
  }]);

  angular.module("training").filter('week8', [function() {
    return function (workouts) {
      var filtered_list = [];
      return filter(workouts, 8);
    };
  }]);

}());
