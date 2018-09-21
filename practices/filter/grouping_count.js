'use strict'

function grouping_count(collection) {
  var obj = {}
  for (var i = 0; i < collection.length; i++) {
    if (!obj[collection[i]]) {
      obj[collection[i]] = 1
    } else {
      obj[collection[i]]++
    }
  }
  return obj
}

module.exports = grouping_count
