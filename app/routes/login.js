'use strict';

angular.module('myApp.login-routes', ['ngRoute'])
// Routes of this module
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/login', {
      templateUrl: 'components/login/views/login.html',
      controller: 'LoginController'
    })
    .when('/login/create', {
        templateUrl: 'components/login/views/partial-create-account.html',
        controller : 'LoginCreateController'
      });
  }

]);
