'use strict';

describe('TodoController', function() {
  beforeEach(module('todoApp'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('TodoController', {$scope: scope});
  }));

  it('can add a new todo', function() {
    expect(scope.remaining()).to.equal(1);

    scope.todoText = "Something to add";

    scope.addTodo();

    expect(scope.remaining()).to.equal(2);

    expect(scope.todos[2].text).to.equal('Something to add');
    expect(scope.todos[2].done).to.be.false;
  });
});
