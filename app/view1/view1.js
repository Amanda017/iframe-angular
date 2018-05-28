'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
  if($location.search().hello)
    $scope.message = $location.search().hello;
  else $scope.message = "YourPageHere";
  $scope.frameName = "view2";
  $scope.frameUrl = "http://localhost:8000/#!/view2";
}]);

//fullstack

controller('fullstack', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
  if($location.search().hello)
    $scope.message = $location.search().hello;
  else $scope.message = "YourPageHere";
  $scope.frameName = "view2";
  $scope.frameUrl = "http://localhost:8000/#!/view2";
}]);