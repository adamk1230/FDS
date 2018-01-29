var assert = require('assert');
var fds = require('../fds');


describe('fds test', function(){
  describe('factorial', function(){
    it('Should return the factorial of the number', function(){
      assert.equal(3628800, fds.factorial(10));
    });
  });
  describe('factorialDigitSum', function(){
    it('Should return the factorial digit sum of the number', function(){
      assert.equal(27, fds.factorialDigitSum(10));
    });
  });
})