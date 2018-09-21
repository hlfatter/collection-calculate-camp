'use strict'
var rank_asc = function(collection) {
  function sortNum(a, b) {
    return b - a
  }
  collection.sort(sortNum)
  return collection
}

module.exports = rank_asc
