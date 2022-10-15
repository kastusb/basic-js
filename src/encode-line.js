const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      } 
      if (arr[i] !== arr[j+1]) {
        result += count <= 1 ? arr[i] : count + arr[i];
        i += count;
        count = 0;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
