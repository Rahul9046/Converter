/**
 * @borrows n2w as n2w
 */
import n2w from './n2w.js';
/**
 * Contains the string representation of each ordinal.
 */
var ordinals = {
  'first': [1, 'st'],
  'second': [2, 'nd'],
  'third': [3, 'rd'],
  'fourth': [4, 'th'],
  'fifth': [5, 'th'],
  'sixth': [6, 'th'],
  'seventh': [7, 'th'],
  'eigth': [8, 'th'],
  'ninth': [9, 'th'],
  'tenth': [10, 'th'],
  'eleventh': [11, 'th'],
  'twelfth': [12, 'th'],
  'thirteenth': [13, 'th'],
  'fourteenth': [14, 'th'],
  'fifteenth': [15, 'th'],
  'sixteenth': [16, 'th'],
  'seventeenth': [17, 'th'],
  'eighteenth': [18, 'th'],
  'nineteenth': [19, 'th'],
  'twentyth': [20, 'th']
};
/**
 * A method that checks if a particular charcter is present inside a string.
 * @function
 * @param {string} toCheck-The character to be checked inside a string
 * @returns {boolean} 
 * @class 
 */
String.prototype.contains = function (toCheck) {
  var splitStr = this.split('');
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === toCheck) {
      return true;
    }
  }
  return false;
};
/**
 * The Decimal Fraction class
 * @class
 */
class DecimalFraction {
  /**
   * @constructor
   * @param {string} str-The alphanumeric string that contains a decimal point or a fractional part
   */
  constructor (str) {
    this.str = str;
  }
  /**
   * The method that converts the string to its numeric representation
   * @function
   * @returns {string}
   */
  convert () {
    var parsedStr = '';
    if (this.str.contains('.')) {
      var splitStr = this.str.split('.');
      parsedStr += n2w(splitStr[0]) + ' point ' + n2w(splitStr[1]);
      return parsedStr;
    } else if (this.str.contains('/')) {
      var splitStr = this.str.split('/'), tobeParsed = '';
      parsedStr += n2w(splitStr[0]) + ' ';
      if (splitStr[1].length >= 2) {
        if (splitStr[1].length === 2) {
          if (splitStr[1].slice(0, 1) === '1') {
            tobeParsed = splitStr[1];
          } else {
            parsedStr += n2w(splitStr[1].slice(0, 1) + '0') + ' ';
            tobeParsed = splitStr[1].slice(-1);
          }
        } else {
          if (splitStr[1].slice(-2, -1) === '1') {
            tobeParsed = splitStr[1].slice(-2);
            parsedStr += n2w(splitStr[1].slice(0, splitStr[1].length - 2) + '00') + ' ';
          } else {
            parsedStr += n2w(splitStr[1].slice(0, splitStr[1].length - 1) + '0') + ' ';
            tobeParsed = splitStr[1].slice(-1);
          }
        }
      } else {
        tobeParsed += splitStr[1];
      }
      for (var keys in ordinals) {
        if (ordinals[keys][0] === Number(tobeParsed)) {
          parsedStr += keys;
        }
      }
      return parsedStr;
    } else if (this.str.contains('-')) {
      var splitStr = this.str.split('-'), parsedStr = '';
      parsedStr += n2w(splitStr[0]) + ' ';
      for (var keys in ordinals) {
        if ((ordinals[keys][0] + ordinals[keys][1]) === splitStr[1]) {
          parsedStr += keys;
        }
      }
      return parsedStr;
    }
  }
}
export default DecimalFraction;
