'use strict'

function choose_common_elements(collection_a, collection_b) {
  var result = []
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_b.indexOf(collection_a[i]) > -1) {
      result.push(collection_a[i])
    }
  }
  return result
}

module.exports = choose_common_elements
