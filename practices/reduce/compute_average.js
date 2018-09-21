'use strict'

function compute_average(collection) {
  var sum = 0
  var avg
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i]
  }
  avg = sum / collection.length
  return avg
}

module.exports = compute_average
