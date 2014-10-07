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
      $scope.loveButton = 'Love It';
      $scope.hateButton = 'Hate It';

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
          return '/img/goblet.jpg';
        case 'Mug':
          return '/img/mug.jpg';
      }
    }

  $scope.addLove = function(){
    $scope.loveButton = 'Loved It';
    User.addLoveIt($scope.beer).then(function(response){
      $scope.loveIt.push($scope.beer);
    });
  };

  $scope.addHate = function(){
    $scope.hateButton = 'Hated It';
    User.addHateIt($scope.beer).then(function(response){
      $scope.hateIt.push($scope.beer);
    });
  };


  }]);
})();

