'use strict';

angular.module('myApp.spaceProfile-routes', ['ngRoute'])
// Config of routes inside this module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/space-profile', {
    templateUrl: 'components/space-profile/views/space-profile.html',
    controller: 'SpaceProfileController'
  });
}]);
