(function(){
  'use strict';

  angular.module('hoppyDays', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .when('/search',   {templateUrl:'/views/beer/beer.html',     controller:'BeerCtrl'})
    .when('/beer',     {templateUrl:'/views/beer/beer.html', controller:'BeerCtrl'})
    .when('/dashboard', {templateUrl:'/views/dashboard/dashboard.html', controller:'DashCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'hoppyDays', storeName:'cache', version:1.0});
  }]);
})();

