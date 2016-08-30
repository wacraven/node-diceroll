'use strict'

const chai = require('chai');
var assert = chai.assert

const rollGetter = require('../lib/math');

describe('math.js', () => {
  describe('rollGetter()', () => {
    it('should be a function', () => {
      assert.isFunction(rollGetter);
    })
    it('should return a random number given number of dice and sides per dice', () => {
      for (let i = 0; i < 1000; i++) {
        assert.oneOf(rollGetter('1d6'), [1,2,3,4,5,6]);
      }
    })
  })
})
