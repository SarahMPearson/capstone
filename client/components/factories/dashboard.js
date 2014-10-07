(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('Dashboard', ['$http', function($http){

    function show(){
      return $http.get('/dashboard');
    }

    function delBeer(beerId){
      return $http.delete('/dashboard/' + beerId);
    }

    return ({show:show, delBeer:delBeer});

  }]);
})();

