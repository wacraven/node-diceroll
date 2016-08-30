'use strict'

let rollGetter = (dice) => {
  let count = dice.split('d')[0]
  let sides = dice.split('d')[1]
  let total = 0;
  for (let countRolled = 0; countRolled < count; countRolled++) {
    total += Math.floor(Math.random() * sides + 1)
  }
  return total
}

module.exports = rollGetter
