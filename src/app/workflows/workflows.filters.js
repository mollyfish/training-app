require('../app');

(function () {
  "use strict";
  
  var originalStart;
  var start;
  var mid;
  var end;
  var filtered_workflow_list;

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

  function filter(workflows, weekNumber) {
    filtered_workflow_list = [];
      addWeeks(weekNumber, setDates);
      for (var i = 0; i < workflows.length; i++) {
        var workflowDate = new Date(workflows[i].date);
        if (mid <= workflowDate && workflowDate < end) {
          filtered_workflow_list.push(workflows[i]);
        }        
      }
    return filtered_workflow_list;
  }

  angular.module("codeTrainer").filter('upcomingEvents', [function() {
    return function (workflows) {
      var filtered_list = [];
      for (var i = 0; i < workflows.length; i++) {
        var today = new Date();
        var workflowDate = new Date(workflows[i].date);
        if (today <= workflowDate) {
          filtered_list.push(workflows[i]);
        }
      }
      return filtered_list;
    }
  }]);

  angular.module("codeTrainer").filter('pastEvents', [function() {
    return function (workflows) {
      var filtered_list = [];
      for (var i = 0; i < workflows.length; i++) {
        var today = new Date();
        var workflowDate = new Date(workflows[i].date);
        if (today >= workflowDate) {
          filtered_list.push(workflows[i]);
        }
      }
      return filtered_list;
    }
  }]);

  angular.module("codeTrainer").filter('thisWeek', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 1);
    };
  }]);

  angular.module("codeTrainer").filter('week2', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 2);
    };
  }]);

  angular.module("codeTrainer").filter('week3', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 3);
    };
  }]);

  angular.module("codeTrainer").filter('week4', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 4);
    };
  }]);

  angular.module("codeTrainer").filter('week5', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 5);
    };
  }]);

  angular.module("codeTrainer").filter('week6', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 6);
    };
  }]);

  angular.module("codeTrainer").filter('week7', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 7);
    };
  }]);

  angular.module("codeTrainer").filter('week8', [function() {
    return function (workflows) {
      var filtered_list = [];
      return filter(workflows, 8);
    };
  }]);

}());
