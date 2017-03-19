(function() {

  var app = angular.module("firstmodule", []);

  var MainController = function($scope, $http) {

    var OnComplete = function(response) {
      $scope.user = response.data;
      
      var repourl = $scope.user.repos_url;
      $http.get(repourl).then(OnRepo, OnError);
    };

    var OnRepo = function(response){
      $scope.repoData = response.data;
    };

    var OnError = function(reason) {
      $scope.error = "Could not featch data";
    };

    $scope.search = function(username) {
      var promise = $http.get("https://api.github.com/users/" + username);
      promise.then(OnComplete, OnError);
    };

    $scope.username = "angular";
    $scope.repoSortOrder = "+stargazers_count";
  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());