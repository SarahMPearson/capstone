(function(){
  'use strict';

  angular.module('hoppyDays')
  .controller('DashCtrl', ['$scope', 'User', function($scope, User){

    User.index(User).then(function(response){
      $scope.user = response.data.user;
    });

  }]);
})();

