(function(){
  'use strict';

  angular.module('hoppyDays')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    Home.getMessage().then(function(response){
      $scope.beers = response.data.beer;

      $interval(function(){
        $scope.beer = _.shuffle($scope.beers)[0];
      }, 1000);
    });
  }]);
})();
