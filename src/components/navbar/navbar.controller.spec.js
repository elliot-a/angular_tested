'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('angularTested'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should test this', function(){

    expect(true).toBe(true);

  });

});
