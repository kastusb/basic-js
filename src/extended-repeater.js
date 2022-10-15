
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = '+';
  if (options.addition === undefined) options.addition = '';
  if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
  if (options.additionSeparator === undefined) options.additionSeparator = '|';

  let extraStr = ('' + options.addition + options.additionSeparator)
  .repeat(options.additionRepeatTimes)
  .slice(0, -options.additionSeparator.length);
  
  let resultStr = ('' + str + extraStr + options.separator)
  .repeat(options.repeatTimes)
  .slice(0, -options.separator.length);
  
  return resultStr;
}

module.exports = {
  repeater
};
