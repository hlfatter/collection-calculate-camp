'use strict'

function choose_multiples_of_three(collection) {
  var result = collection.filter(function(value, index, arr) {
    return value % 3 === 0
  })
  return result
}

module.exports = choose_multiples_of_three
