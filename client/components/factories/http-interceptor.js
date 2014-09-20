(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('HttpInterceptor', ['$rootScope', '$location', '$q', function($rootScope, $location, $q){

    function responseError(res){
      if(res.status === 401){
        $location.path('/login');
      }

      return $q.reject(res);
    }

    function response(res){
      console.log(res);
      console.log(res.headers('x-authenticated-user'));
      var email = res.headers('x-authenticated-user');

      if(email){
        $rootScope.$broadcast('authenticated', email);
      }

      return res;
    }

    return {response:response, responseError:responseError};
  }]);
})();

