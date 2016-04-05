require('../app');

(function () {
  "use strict";

  angular.module("codeTrainer").service("WorkflowsService", ["$http", function ($http) {
    var urlRoot = "/api/workflows";

    var Workflow = {
      get: function (id) {
        if (angular.isDefined(id)) {
          return $http.get(urlRoot + "/" + id);
        } else {
          return $http.get(urlRoot);
        }
      },
      update: function (model) {
        if (model.swim) {
          model.sport = 'Swim'
        }
        if (model.bike) {
          model.sport = 'Bike'
        }
        if (model.run) {
          model.sport = 'Run'
        }
        if (model.xtrain) {
          model.sport = 'Xtrain'
        }
        if (model.rest) {
          model.sport = 'Rest'
        } 
        return $http.put(urlRoot + "/" + model._id, model);
      },
      create: function (model) {
        if (model.swim) {
          model.sport = 'Swim'
        }
        if (model.bike) {
          model.sport = 'Bike'
        }
        if (model.run) {
          model.sport = 'Run'
        }
        if (model.xtrain) {
          model.sport = 'Xtrain'
        }
        if (model.rest) {
          model.sport = 'Rest'
        }
        console.log(model);
        return $http.post(urlRoot, model); // ideal, but doesn't work
      },
      delete: function (model) {
        if (confirm('Are you sure you want to delete this workflow?')) {
          return $http.delete(urlRoot + "/" + model);
        } else {
          return;
        }
      }
    };
    return Workflow;
  }]);
}());
