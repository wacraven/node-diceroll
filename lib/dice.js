'use strict'

const rollGetter = require('./math');

let toDiceNotation = (dice) => {
  return `${dice.count}d${dice.sides}`
}

let roll = (diceNotation) => {
  return rollGetter(diceNotation)
}
module.exports = { roll, toDiceNotation }
