'use strict'

const chai = require('chai');
var assert = chai.assert
const child_process = require('child_process')

describe("cli.js", () => {
  it('should handle no arguments', (done) => {
    child_process.exec('bin/diceroll', (err, stdout) => {
      if (err) {done(err)}
      assert.oneOf(stdout.toString(), ['1\n','2\n','3\n','4\n','5\n','6\n'])
      done()
    })
  })
  it('should handle one argument', (done) => {
    child_process.exec('bin/diceroll 4', (err, stdout) => {
      if (err) {done(err)}
      assert.oneOf(stdout.toString(), ['1\n','2\n','3\n','4\n'])
      done()
    })
  })
  it('should handle two arguments', (done) => {
    child_process.exec('bin/diceroll 2 2', (err, stdout) => {
      if (err) {done(err)}
      assert.oneOf(stdout.toString(), ['1\n','2\n','3\n','4\n'])
      done()
    })
  })
})
