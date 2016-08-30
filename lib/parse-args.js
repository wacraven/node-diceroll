'use strict'


let argParse = (args) => {
  if (args === undefined || args === null || args.length === 0) {
    return {count: 1, sides: 6}       //6 sided roll
  } else if (args.length === 1) {
    return {count: 1, sides: args[0]} //x sided roll
  } else if (args.length === 2) {
    return {count: args[0], sides: args[1]} //multiple x sided roll
  } else {
    // console.log('else');
  }
}

module.exports = argParse
