'use strict'

function compare_collections(collection_a, collection_b) {
  collection_a.sort()
  collection_b.sort()
  for (var i = 0; i < collection_a.length; i++) {
    if (collection_a[i] === collection_b[i]) {
      return true
    }
  }
}

module.exports = compare_collections
