(function(){
  'use strict';

  angular.module('hoppyDays')
  .controller('RegisterCtrl', ['$scope', '$location', 'Userx', 'Home', function($scope, $location, Userx, Home){
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
      debugger;
      Userx.register($scope.user).then(success, failure);
    };
  }]);
})();

