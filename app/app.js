'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'ui.router',
  // Commons for the whole app
  'myApp.header',
  'myApp.footer',
  // 'myApp.menu',
  // Little modules or views inside the app
  'myApp.home-controller',
  'myApp.spaceProfile-controller',
  'myApp.reservationInfo-controller',
  'myApp.login-controller',
  'myApp.loginCreate-controller',
  'myApp.upload_space-controller',
  'myApp.how_it_works-controller',
  // Routes modules
  'myApp.home-routes',
  'myApp.spaceProfile-routes',
  'myApp.reservationInfo-routes',
  'myApp.login-routes',
  'myApp.upload_space-routes',
  'myApp.how_it_works-routes'



])


// Routes of the site
.config(['$locationProvider', '$routeProvider',
 function($locationProvider, $routeProvider) {
  // $routeProvider.otherwise({redirectTo: '/home'});
  // use the HTML5 History API
  // Uncomment only when you figured out the server side config
  // $locationProvider.html5Mode(true);
}])
.controller('AppController', ['$scope','$document','$rootScope','$location', 'mostrarHeadFoot',
                    function($scope, $document, $rootScope, $location, mostrarHeadFoot) {
    $scope.init = function (){
      $rootScope.showHeadFoot = mostrarHeadFoot;
    };


}])
.factory('mostrarHeadFoot', ['$location',function($location){
  var mostrar=true;
  var patt = new RegExp("^\/login([\/]*[a-zA-Z\-_0-9]*)*$");
  // show or not the header
  if( patt.test( $location.path() ) ){
    mostrar=false;
  }
  return mostrar;
}])
.run(function($rootScope){
  $rootScope.idiom = {};
  $rootScope.idiom.prefered ='es';
  $rootScope.idiom.translations = {
    es:{
      'head-copy':'Hola Header aca',
      'foot-copy':'Todos los derechos reservados a Pop.Space',
      'login-enter-data':'Ingresa tus datos',
      'login-username':'Correo Electrónico',
      'login-password':'Contraseña',
      'login-login':'Iniciar sesión',
      'login-login-facebook':'Acceder con Facebook',
      'login-login-twitter':'Acceder con Twitter',
      'login-login-linkedin':'Acceder con LinkedIn',
      'login-login-google':'Acceder con Google+',
      'login-forgot':'¿Olvidaste tu contraseña?',
      'login-create-account':'Crear una cuenta',
      'login-return-login': 'Regresar a Página Login',
      'login-name': 'Nombre',
      'login-lastname': 'Apellido(s)',
      'login-phone': 'Número Telefónico',
      'login-dob': 'Fecha de Nacimiento (DD/MM/AAAA)',
      'login-next-step': 'Siguiente Paso',
      'login-step1-2': 'Paso 1 de 2',
      'login-step2-2': 'Paso 2 de 2',
      'login-complete-register': 'Completar Registo'
    },
    en:{
      'head-copy':'Hi Header here',
      'foot-copy':'All rights reserved to Pop.Space',
      'login-enter-data':'Enter you data',
      'login-username':'Email',
      'login-password':'Password',
      'login-login':'Login In',
      'login-login-facebook':'Login with Facebook',
      'login-login-twitter':'Login with Twitter',
      'login-login-linkedin':'Login with LinkedIn',
      'login-login-google':'Login with Google+',
      'login-forgot':'Forgot your password?',
      'login-create-account':'Create an account',
      'login-return-login': 'Return to Login Page',
      'login-name': 'Name',
      'login-lastname': 'Last Name',
      'login-phone': 'Phone Number',
      'login-dob': 'Date of Birth (DD/MM/YYYY)',
      'login-next-step': 'Next Step',
      'login-step1-2': 'Step 1 of 2',
      'login-step2-2': 'Step 2 of 2',
      'login-complete-register': 'Complete Registration'

    }
  };
})
;


// });
