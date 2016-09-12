'use strict';

angular.module('myApp.footer', [])

// Config of routes inside this
// The logic of this module
.controller('FooterController', ['$scope', 'mostrarHeadFoot', '$rootScope',
                        function($scope, mostrarHeadFoot, $rootScope) {
  $scope.userData = {
    name:'Super Footer'
  };
  $scope.templateUrl = 'shared/footer/views/footer.html';
  // $scope.mostrar = mostrarHeadFoot;
  $scope.valorroot = $rootScope.myData;

  $scope.changeLanguage = function(){
    $rootScope.idiom.prefered = $rootScope.idiom.prefered ==='es'?'en':'es';
  };


}])

.directive('myappFooter', function(){
  return{
    restrict:'E',
    templateUrl: 'shared/footer/views/footer.html'
  };
});
