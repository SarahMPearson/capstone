(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('BeerApi', ['$http', function($http){
    function find(beer){
      return $http.get('/find/' + beer);
    }

    function findBrew(brewery){
      return $http.get('/find/' + brewery);
    }

    return {find:find, findBrew:findBrew};
  }])
  .controller('BeerCtrl', ['$scope', 'BeerApi', 'User', function($scope, BeerApi, User){
    $scope.findBeer = function(){
      $scope.beers = [];
      $scope.breweries = [];
      $scope.loveIt = [];
      $scope.hateIt = [];

      BeerApi.find($scope.beername).then(function(response){
        $scope.beers = response.data.data[0];
        $scope.beers.glass.img = findGlassImg($scope.beers.glass.name);
      });
    };
    $scope.findBrew = function(){
      BeerApi.findBrew($scope.breweryname).then(function(response){
        $scope.breweries = response.data.data[0];
      });
    };

    function findGlassImg(glass){
      switch(glass){
        case 'Pint':
          return '/img/pint.jpg';
        case 'Snifter':
          return '/img/snifter.jpg';
        case 'Weizen':
          return '/img/weizen-glass.jpg';
        case 'Pilsner':
          return '/img/pilsner.jpg';
        case 'Tulip':
          return '/img/tulip-glass.jpg';
        case 'Goblet':
          return '/img/goblet.jpt';
      }
    }

  $scope.addLove = function(){
    User.addLoveIt($scope.beers.id).then(function(response){
      $scope.loveIt.push($scope.beers.id);
    });
  };

  $scope.addHate = function(){
    User.addHateIt($scope.beers.id).then(function(response){
      $scope.hateIt.push($scope.beers.id);
    });
  };

  }]);
})();

