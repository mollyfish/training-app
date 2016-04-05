require('../app');

(function () {
  "use strict";

  angular.module("codeTrainer").controller("WorkflowsCtrl", ["WorkflowsService", function (WorkflowsService) {
    var vm = this;

    vm.workflows = [];
    vm.delete = deleteWorkflow;

    initialize();

    function initialize () {
      getWorkflows();
    }

    function getWorkflows () {
      WorkflowsService.get().then(function (resp) {
        vm.workflows = resp.data;
      });
    }

    function deleteWorkflow (workflow) {
      WorkflowsService.delete(workflow).then(function () {
        getWorkflows();
      });
    }

  }]);
}());
