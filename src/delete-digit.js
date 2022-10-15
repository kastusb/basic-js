const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numSplit = ('' + n).split('');
  let resultArr = [];
  for (let i = 0; i < numSplit.length; i++) {
    let tempArray = numSplit.slice();
    tempArray.splice(i, 1);
    resultArr[i] = tempArray.join('');
  }
  return +resultArr.sort()[resultArr.length-1];
}

module.exports = {
  deleteDigit 
};
