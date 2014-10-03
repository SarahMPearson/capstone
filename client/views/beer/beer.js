(function(){
  'use strict';

  angular.module('hoppyDays')
  .factory('BeerApi', ['$http', function($http){
    function find(beer){
      return $http.get('/search/' + beer);
    }

    function show(){
      return $http.get('/beer');
    }

    function showLove(beerId){
      return $http.get('/dashboard');
    }

    return {find:find, show:show, showLove:showLove};
  }])
  .controller('BeerCtrl', ['$scope', 'BeerApi', 'User', function($scope, BeerApi, User){
    $scope.findBeer = function(){
      $scope.beers = [];
      $scope.loveIt = [];
      $scope.hateIt = [];

      BeerApi.find($scope.beername).then(function(response){
        $scope.beers = response.data.data;
      });
    };

    $scope.show = function(beer){
      beer.glass.img = findGlassImg(beer.glass.name);
      $scope.beer = beer;
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
    User.addLoveIt($scope.beer).then(function(response){
      $scope.loveIt.push($scope.beer);
    });
  };

  $scope.addHate = function(){
    User.addHateIt($scope.beer).then(function(response){
      $scope.hateIt.push($scope.beer);
    });
  };


  }]);
})();

