require('../app');

(function() {
  "use strict";

  angular.module("codeTrainer").directive("workflowDetails", function () {
    return {
      scope: {
        workflow: "=workflow",
      },
      templateUrl: 'views/workflow/workflow_detail.html',
    };
  });
}());
