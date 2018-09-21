'use strict'

function choose_divisible_integer(collection_a, collection_b) {
  var result = collection_a.filter(function(value) {
    for (var i = 0; i < collection_b.length; i++) {
      if (value % collection_b[i] === 0) {
        return value
      }
    }
  })
  return result
}

module.exports = choose_divisible_integer
