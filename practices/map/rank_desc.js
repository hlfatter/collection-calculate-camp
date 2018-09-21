'use strict'
var rank_desc = function(collection) {
  function sortNum(a, b) {
    return a - b
  }
  collection.sort(sortNum)
  return collection
}

module.exports = rank_desc
