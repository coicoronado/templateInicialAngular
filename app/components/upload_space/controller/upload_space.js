'use strict';

angular.module('myApp.upload_space-controller', ['ngRoute'])

// Routes of this module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload_space', {
    templateUrl: 'components/upload_space/views/upload_space.html',
    controller: 'UploadSpaceController'
  });
}])

// The logic of this module
.controller('UploadSpaceController', ['$scope', '$rootScope',function($scope, $rootScope) {
  $scope.f="d";
}]);
