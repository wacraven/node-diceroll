'use strict'

const chai = require('chai');
var assert = chai.assert

const { roll, toDiceNotation } = require('../lib/dice');

describe('dice.js', () => {
  describe('roll()', () => {
    it('should be a function', () => {
      assert.isFunction(roll);
    })
    it('should take dice notation and return the total value of the result', () => {
      let expected = [];
      for (var i = 2; i <= 40; i++) {
        expected.push(i)
      }
      for (let i = 0; i < 1000; i++) {
        assert.oneOf(roll('2d20'), expected);
      }
    })
  })

  describe('toDiceNotation()', () => {
    it('should be a function', () => {
      assert.isFunction(toDiceNotation);
    })
    it('should take an object w/ count & sides properties and convert it to dice notation', () => {
      const exampleDie = { count: 2, sides: 24 }
      const exampleExpected = '2d24'
      assert.strictEqual(toDiceNotation(exampleDie), exampleExpected)
    })
  })
})
