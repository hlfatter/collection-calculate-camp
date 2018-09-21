'use strict'

function double_to_one(collection) {
  var result = []
  var arr = collection
  arr = arr.join(',').split(',')
  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) < 0) {
      result.push(arr[i])
    }
  }

  return result
}

module.exports = double_to_one
