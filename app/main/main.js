'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: 'MainCtrol'
  });
}])

.controller('MainCtrol', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.message = "";
  $scope.frameName = "image";
  $scope.frameUrl = "http://localhost:8000/#!/view1?hello=";
  
  $scope.sendMessage = function() {
    switch ($scope.frameName) {
      case 'image':
        $scope.frameUrl = "http://localhost:8000/#!/view1?hello=" + $scope.message;
        break;
      case 'video':
        $scope.frameUrl = "http://localhost:8000/#!/view2?hello=" + $scope.message;
        break;
      default:
        break;
    }
  }
  $scope.pageChange = function(name) {
    $scope.frameName = name;
    switch (name) {
      case 'image':
        $scope.frameUrl = "http://localhost:8000/#!/view1?hello=";
        break;
      case 'video':
        $scope.frameUrl = "http://localhost:8000/#!/view2?hello=";
        break;
      case 'carousel':
        $scope.frameUrl = "http://localhost:8000/#!/view3?hello=";
        break;
      default:
        break;
    }
  }
}]);