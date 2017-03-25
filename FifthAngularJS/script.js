(function() {

  var app = angular.module("firstmodule", []);

  var MainController = function($scope, github, $interval, $log) {

    var OnComplete = function(data) {
      $scope.user = data;
      github.getRepose($scope.user).then(OnRepo, OnError);
    };

    var OnRepo = function(data) {
      $scope.repoData = data;
    };

    var OnError = function(reason) {
      $scope.error = "Could not featch data";
    };

    var decrementcount = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };
    var countdownInterval = null;
    var startcountdown = function() {
      countdownInterval = $interval(decrementcount, 1000, $scope.countdown);
    };

    $scope.search = function(username) {
      $log.info("Searching for " + username);
      
      github.getUser(username).then(OnComplete, OnError);
      
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
    };

    $scope.username = "angular";
    $scope.repoSortOrder = "+stargazers_count";
    $scope.countdown = 5;

    startcountdown();
  };

  app.controller("MainController", ["$scope", "github", "$interval", "$log", MainController]);

}());