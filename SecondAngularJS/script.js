var MainController = function($scope,$http) {
  $scope.message = "Hello World";

  var person = {
    firstname: "Kuanl",
    lastname: "Londhe",
    Image: "http://k.7w7.us/li/mpr/mpr/shrink_80_80/p/1/000/033/2ed/1023126.jpg"
  };

  $scope.person = person;

  var OnComplete = function(response) {
    $scope.userData = response.data;
  }

  var OnError = function(reason) {
    $scope.error = "error while featch user data";
  }

  $http.get("https://api.github.com/users/kunallondhe")
  .then(OnComplete, OnError);

};