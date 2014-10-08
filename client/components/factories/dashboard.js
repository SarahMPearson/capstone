(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('Dashboard', ['$http', function($http){

    function showDash(){
      return $http.get('/dashboard');
    }

    function delBeer(beerId){
      return $http.delete('/dashboard/' + beerId);
    }

    return ({showDash:showDash, delBeer:delBeer});

  }]);
})();

