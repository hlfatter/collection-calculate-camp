'use strict'
function map_to_even(collection) {
  var collection_b
  collection_b = collection.map(function(value) {
    return value * 2
  })
  return collection_b
}
module.exports = map_to_even
