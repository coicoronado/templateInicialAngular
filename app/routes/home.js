'use strict';

angular.module('myApp.home-routes', ['ngRoute'])
// Routes of this module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'components/home/views/home.html',
    controller: 'HomeController'
  });
}]);
