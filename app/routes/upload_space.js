'use strict';

angular.module('myApp.upload_space-routes', ['ngRoute'])
// Routes of this module
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload_space', {
    templateUrl: 'components/upload_space/views/upload_space.html',
    controller: 'UploadSpaceController'
  });
}]);
