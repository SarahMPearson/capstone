(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('User', ['$http', function($http){


    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function addLoveIt(beer){
      return $http.post('/loveit', beer);
    }

    function addHateIt(beer){
      return $http.post('/hateit/', beer);
    }

    function index(user){
      return $http.get('/dashboard', user);
    }

    return ({register:register, login:login, logout:logout, addLoveIt:addLoveIt, addHateIt:addHateIt, index:index});
  }]);
})();

