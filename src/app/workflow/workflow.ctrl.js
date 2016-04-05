require('../app');

(function () {
  "use strict";

  angular.module("codeTrainer").controller("WorkflowCtrl", ["WorkflowsService", "$routeParams", "$location", function (WorkflowsService, $routeParams, $location) {
    var vm = this;

    vm.workflows = [];
    vm.delete = deleteWorkflow;

    initialize();

    function initialize() {
      WorkflowsService
        .get($routeParams.workflow_id)
        .then(function (resp) {
          vm.workflow = resp.data;
        });
    }



    function deleteWorkflow (workflow) {
      console.log('workflow' + workflow);
      WorkflowsService.delete(workflow).then(function () {
        console.log('deleted');
        $location.path("/workflows");
      });
    }
  }]);
}());
