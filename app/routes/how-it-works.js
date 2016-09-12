'use strict';

angular.module('myApp.how_it_works-routes', ['ngRoute'])
// Routes of this module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/how-it-works', {
    templateUrl: 'components/how-it-works/views/how-it-works.html',
    controller: 'HowItWorksController'
  });
}]);
