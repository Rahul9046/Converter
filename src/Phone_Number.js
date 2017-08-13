/**
 * @borrows n2w as n2w
 */
import n2w from './n2w.js';
/**
 * The PhoneNumber class
 * @class
 */
class PhoneNumber {
  /**
   * @constructor
   * @param {string} num-The phone number in numeric format 
   */
  constructor (num) {
    this.num = num;
  }
  /**
   * The method that converts phone numbers to its textual representation.
   * @function
   * @returns {string}
   */
  converter () {
    var splittedNum = this.num.split(''), parsedNum = '';
    for (var i = 0; i < splittedNum.length; i++) {
      if (isNaN(splittedNum[i]) === false) {
        parsedNum += n2w(splittedNum[i]) + ' ';
      } else {
        parsedNum += splittedNum[i] + ' ';
      }
    }
    parsedNum = parsedNum.slice(0, parsedNum.length - 1);
    return parsedNum;
  }
}
export default PhoneNumber;
