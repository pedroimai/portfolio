
angular.module('myportfolio', ['ngResource'])
//---------------
// Services
.factory('User', ['$resource', function($resource){
  return $resource('/users', null, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
}])

.factory('Messages', ['$resource', function($resource){
  return $resource('/messages', null, {
    query: {
      method: 'GET',
      isArray: true
    }
  });
}])


//---------------
// Controllers
//---------------
.controller('UserController', ['$scope','$timeout', 'User','Messages', function ($scope,$timeout, User, Messages) {

  $scope.user = '';
  $scope.user = User.query(function(data){
    $scope.user = data[0];
  });

  $scope.$watch('user', function(){
    $timeout(function(){
      initApp();
    });
  });

  $scope.sendMessage = function(){
    var messages = new Messages({name : $scope.name, email: $scope.email, content:$scope.content});
    messages.$save(function(){
      toastr.success("I'll reply you as soon as possible :)", 'Thanks for the message!')
      $scope.name = "";
      $scope.email = "";
      $scope.content = "";
    });
  };

}])
