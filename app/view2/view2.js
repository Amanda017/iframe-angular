'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
  if($location.search().hello)
    $scope.message = $location.search().hello;
  else $scope.message = "YourPageHere";
}]);