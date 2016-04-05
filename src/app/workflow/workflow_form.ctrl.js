require('../app');

(function () {
  "use strict";
  angular.module("codeTrainer").controller("WorkflowFormCtrl", ["WorkflowsService", "$routeParams", "$location", function (WorkflowsService, $routeParams, $location) {
    var vm = this;
    vm.save = saveForm;
    vm.workflow = {};
    vm.change = resetFalsy;

    initialize();

    function initialize () {
      vm.workflow.date = new Date();
      if ($routeParams.workflow_id) {
        WorkflowsService.get($routeParams.workflow_id).then(function (resp) {
          vm.workflow = resp.data;
          vm.workflow.date = new Date(vm.workflow.date) || new Date();
        });
      }
    }

    function saveForm () {
      var method;

      method = $routeParams.workflow_id ? "update" : "create";
      WorkflowsService[method](vm.workflow).then(function (resp) {

        $location.path("/workflows/" + resp.data._id);
      });
    }

    function resetFalsy (sport) {
      console.log('you chose ' + sport);
      vm.workflow.swim = false;
      vm.workflow.bike = false;
      vm.workflow.run = false;
      vm.workflow.xtrain = false;
      vm.workflow.rest = false;
      switch (sport) {
        case "swim":
          vm.workflow.swim = true;
          break;
        case "bike":
          vm.workflow.bike = true;
          break;
        case "run":
          vm.workflow.run = true;
          break;
        case "xtrain":
          vm.workflow.xtrain = true;
          break;
        default:
          vm.workflow.rest = true;
      }
      console.log('---------------');
    }
  }]);
}());
