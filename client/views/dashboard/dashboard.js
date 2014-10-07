(function(){
  'use strict';

  angular.module('hoppyDays')
  .controller('DashCtrl', ['$scope', 'User', function($scope, User){

    User.index(User).then(function(response){
      $scope.user = response.data.user;
    });

    $scope.remove = function(beerId){
      $scope.user.loveIt.splice(beerId, 1);
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
  }]);
})();

