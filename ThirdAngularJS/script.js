(function() {

  var app = angular.module("firstmodule", []);

  var MainController = function($scope, $http) {

    var OnComplete = function(response) {
      $scope.user = response.data;
    }

    var OnError = function(reason) {
      $scope.error = "Could not featch data";
    }

    var promise = $http.get("https://api.github.com/users/kunallondhe");

    promise.then(OnComplete, OnError);
  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());