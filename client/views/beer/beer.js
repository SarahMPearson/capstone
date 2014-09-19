(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('BeerApi', ['$http', function($http){
    function find(beer){
      return $http.get('/find/' + beer);
    }

    return {find:find};
  }])
  .controller('BeerCtrl', ['$scope', 'BeerApi', function($scope, BeerApi){
    $scope.findBeer = function(){
      $scope.beers = [];

      BeerApi.find($scope.beername).then(function(response){
        $scope.beers = response.data.data;
      });
    };
  }]);
})();

