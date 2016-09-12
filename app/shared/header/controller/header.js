'use strict';

angular.module('myApp.header', [])

// Config of routes inside this
// The logic of this module
.controller('HeaderController', ['$scope','$rootScope', 'mostrarHeadFoot',
                        function($scope, $rootScope, mostrarHeadFoot) {
  $scope.userData = {
    name:'Super Header'
  };
  $scope.templateUrl = 'shared/header/views/header.html';
}])

.directive('myappHeader', function(){
  return{
    restrict:'E',
    templateUrl: 'shared/header/views/header.html',
    controller: 'HeaderController'
  };
});
