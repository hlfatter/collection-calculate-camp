'use strict'

function double_to_one(collection) {
  var arr = collection
  var result = []
  arr = arr.join(',').split(',')
  for (var i = 0; i < arr.length; i++) {
    result.push(parseInt(arr[i]))
  }

  return result
}

module.exports = double_to_one
