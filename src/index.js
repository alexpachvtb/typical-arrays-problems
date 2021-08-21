
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  } else {
    return array.sort((a, b) => a - b)[0];
  }
}

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  } else {
    return array.sort((a, b) => b - a)[0];
  }
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  } else {
    return array.reduce((sum, elem) => sum + elem) / array.length;
  }
}
