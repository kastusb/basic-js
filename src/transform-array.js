const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * --discard-next исключает следующий за ней элемент исходного массива 
 из преобразованного массива.
--discard-prev исключает предшествующий ей элемент исходного массива 
из преобразованного массива.
--double-next дублирует следующий за ней элемент исходного массива 
в преобразованном массиве.
--double-prev дублирует предшествующий ей элемент исходного массива 
в преобразованном массиве.
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let array = arr.slice(0);
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '--discard-next' && array[i+1] !== undefined) {
      array[i+1] = 'del';
    }
    if (array[i] == '--discard-prev' && array[i-1] !== undefined) {
      array[i-1] = 'del';
    }
    if (array[i] == '--double-next' && array[i+1] !== undefined) {
      array[i] = array[i+1];
    }
    if (array[i] == '--double-prev' && array[i-1] !== undefined) {
      array[i] = array[i-1];
    }
  }
  return array.filter(x => 
    x != '--discard-next' &&
    x != '--discard-prev' &&
    x != '--double-next' &&
    x != '--double-prev' &&
    x != 'del'
  );
}

module.exports = {
  transform
};
