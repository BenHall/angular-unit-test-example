'use strict';

describe('TodoHttpController', function() {
  beforeEach(module('todoApp'));

  var scope, ctrl, httpBackend;

  beforeEach(inject(function($rootScope, $httpBackend, $controller) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    ctrl = $controller('TodoHttpController', {$scope: scope});
  }));

  afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('can add a new todo', function() {
      httpBackend.expect('GET', 'http://httpbin.org/ip')
        .respond({
            "success": true,
            "origin": 'test'
        });

      scope.$apply(function() {
        scope.makeHttp();
      });

      httpBackend.flush();

      expect(scope.ip).to.equal('test');
  });
});
