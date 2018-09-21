'use strict'

function compute_chain_median(collection) {
  var arr = collection.split('->').sort(function(a, b) {
    return a - b
  })

  console.log(arr) //'98'

  var len = arr.length
  var result = 0

  if (len % 2 === 0) {
    len = len / 2
    result = (parseInt(arr[len]) + parseInt(arr[len - 1])) / 2
  } else {
    result = arr[(len + 1) / 2]
  }
  return result
}

module.exports = compute_chain_median
