'use strict'
var map_to_three_multiples = function(collections) {
  var collection_b
  collection_b = collections.map(function(value) {
    return value * 3
  })
  return collection_b
}

module.exports = map_to_three_multiples
