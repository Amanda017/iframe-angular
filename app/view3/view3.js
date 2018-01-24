'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
  if($location.search().hello)
    $scope.message = $location.search().hello;
  else $scope.message = "YourPageHere";
    $scope.title = 'Here is the carousel demo';
    $scope.slides = ["","","","","","","",""];
    $scope.onCarouselInit = function() {
    }
  
}]);