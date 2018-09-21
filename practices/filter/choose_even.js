'use strict'

function choose_even(collection) {
  var result = collection.filter(function(value, index, collection) {
    return value % 2 === 0
  })

  return result
}

module.exports = choose_even

function add() {}
