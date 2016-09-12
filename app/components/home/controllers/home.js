'use strict';

angular.module('myApp.home-controller', ['ngRoute'])
// The logic of this module
.controller('HomeController', ['$scope', '$rootScope',function($scope, $rootScope) {
  $scope.f="d";
}]);
