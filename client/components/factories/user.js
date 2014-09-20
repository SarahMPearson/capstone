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

    function loveIt(beerId){
      return $http.post('/loveit/'+beerId);
    }

    return {register:register, login:login, logout:logout, loveIt:loveIt};
  }]);
})();

