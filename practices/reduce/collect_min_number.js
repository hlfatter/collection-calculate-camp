'use strict'

function collect_min_number(collection) {
  function sortBy(a, b) {
    return a - b
  }
  collection.sort(sortBy)
  return collection[0]
}

module.exports = collect_min_number
