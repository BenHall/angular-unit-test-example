angular.module('todoApp', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }])
  .controller('TodoHttpController', ['$scope', '$http', function($scope, $http) {

    $scope.makeHttp = function() {
      $http({method: 'GET', url: 'http://httpbin.org/ip'}).
        success(function(data, status, headers, config) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.ip = data.origin;
        }).
        error(function(data, status, headers, config) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }
  }]);