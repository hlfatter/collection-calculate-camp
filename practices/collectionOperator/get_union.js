'use strict'

function get_union(collection_a, collection_b) {
  var result = []
  var arr = collection_a.concat(collection_b)
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) <= 0) {
      result.push(arr[i])
    }
  }
  return result
}

module.exports = get_union
