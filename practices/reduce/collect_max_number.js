'use strict'

function collect_max_number(collection) {
  function sortNum(a, b) {
    return b - a
  }
  collection.sort(sortNum)
  return collection[0]
}

module.exports = collect_max_number
