'use strict'

const chai = require('chai');
var assert = chai.assert

const parseArgs = require('../lib/parse-args');

describe('parse-args.js', () => {
  it('should be a function', () => {
    assert.isFunction(parseArgs)
  })
  it('should handle no arguments', () => {
    const args = []
    const expected = { count: 1, sides: 6 }
    assert.deepEqual(parseArgs(args), expected)
  })
  it('should handle a single argument indicating the number of sides per die', () => {
    const args = [ 20 ]
    const expected = { count: 1, sides: 20 }
    assert.deepEqual(parseArgs(args), expected)
  })
  it('should handle 2 arguments, the first indicating number of dice, the second indicating the number of sides per die', () => {
    const args = [ 2 , 20 ]
    const expected = { count: 2, sides: 20 }
    assert.deepEqual(parseArgs(args), expected)
  })
})
