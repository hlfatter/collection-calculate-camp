'use strict'

function get_integer_interval(number_a, number_b) {
  var result = []
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      result.push(i)
    }
  } else if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
      result.push(i)
    }
  } else {
    return [number_a]
  }
  return result
}

module.exports = get_integer_interval
