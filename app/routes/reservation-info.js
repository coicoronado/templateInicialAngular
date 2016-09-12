'use strict';

angular.module('myApp.reservationInfo-routes', ['ngRoute'])
// Config of routes inside this module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reservation-info', {
    templateUrl: 'components/reservation-info/views/reservation-info.html',
    controller: 'ReservationInfoController'
  });
}]);
