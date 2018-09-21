'use strict'
var map_to_four_multiples_add_one = function(collection) {
  var collection_b
  collection_b = collection.map(function(value) {
    return value * 4 + 1
  })
  return collection_b
}

module.exports = map_to_four_multiples_add_one
