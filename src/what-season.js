const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (date instanceof Date == false ||
    arguments.length > 0 && Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  let num = date.getMonth() + 1;
  if (num > 11 || num < 3) return 'winter';
  if (num > 2 && num < 6) return 'spring';
  if (num > 5 && num < 9) return 'summer';
  if (num > 8 && num < 12) return 'autumn';

}

module.exports = {
  getSeason
};
