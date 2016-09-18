import arrayShuffle from './_arrayShuffle.js';
import baseClamp from './_baseClamp.js';

/**
 * A specialized version of `_.sampleSize` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function arraySampleSize(array, n) {
  var result = arrayShuffle(array);
  result.length = baseClamp(n, 0, result.length);
  return result;
}

export default arraySampleSize;
