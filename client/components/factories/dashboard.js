(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('Dashboard', ['$http', function($http){

    function show(){
      return $http.get('/dashboard');
    }

    return {show:show};

  }]);
})();

