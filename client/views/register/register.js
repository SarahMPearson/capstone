(function(){
  'use strict';

  angular.module('hoppyDays')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', 'Home', function($scope, $location, User, Home){
    $scope.user = {};

    debugger;

    function success(response){
      toastr.success('User successfully registered.');
      $location.path('/login');
    }

    function failure(response){
      toastr.error('Error during user registration, try again.');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

