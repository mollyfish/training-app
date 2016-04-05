require('angular');
require('angular-route');

(function () {
  "use strict";

  var app = angular.module("codeTrainer", ["ngRoute"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/workflows", {
      templateUrl: "views/workflows/workflows_list.html",
      controller: "WorkflowsCtrl as vm",
    })
    .when("/workflows/new", {
      templateUrl: "views/workflow/workflow_form.html",
      controller: "WorkflowFormCtrl as vm",
    })
    .when("/workflows/:workflow_id/edit", {
      templateUrl: "views/workflow/workflow_form.html",
      controller: "WorkflowFormCtrl as vm",
    })
    .when("/workflows/:workflow_id", {
      templateUrl: "views/workflow/workflow_detail.html",
      controller: "WorkflowCtrl as vm",
    })
    .otherwise({
      redirectTo: "/workflows",
    });
  }]);

  app.controller('DateCtrl', ['$scope', function($scope) {
      $scope.date = new Date();
    }
  ]);
}());


require('./index.js');
