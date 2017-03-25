(function() {

  var github = function($http) {

    var getUser = function(username) {
      console.log("getUser");
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepose = function(user) {
      console.log("getRepose");
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepose: getRepose
    };

  };

  var module = angular.module("firstmodule");
  module.factory("github", github);

}());