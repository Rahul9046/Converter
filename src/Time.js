/**
 * @borrows n2w as n2w
 */
import n2w from './n2w.js';
/**
 * A method that checks if a separator encountered is in the list of the valid separators.
 * @function
 * @param {string} toCheck-The separator to be checked inside the array
 * @returns {boolean} 
 * @class 
 */
Array.prototype.contains = function (toCheck) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === toCheck) {
      return true;
    }
  }
  return false;
};
/**
 * A method that checks if the time representation is valid.
 * @function
 * @returns {boolean} 
 * @class 
 */
String.prototype.validTime = function () {
  var separators = [',', ':'];
  var splittedStr = this.split(''), count = 0, flag = 0, lastSeparator, separator;
  for (var i = 0; i < splittedStr.length; i++) {
    if (separators.contains(splittedStr[i])) {
      separator = splittedStr[i];
      if (lastSeparator === undefined || lastSeparator === splittedStr[i]) {
        flag = 1;
        lastSeparator = splittedStr[i];
        count++;
      } else {
        flag = 0;
        break;
      }
    }
  }
  if (flag) {
    return {
      'isValid': true,
      'count': count,
      'separator': separator
    };
  } else {
    return {
      'isValid': false
    };
  }
};
/**
 * The Time class
 * @class
 */
class Time {
  /**
   * @constructor
   * @param {string} str-The time in numeric  representation which will be converted.  
   */
  constructor (str) {
    this.time = str;
  }
  /**
   * The method that converts the time to its textual representation
   * @function
   * @returns {string}
   */
  convertTime () {
    if (this.time.validTime().isValid) {
      var splittedTime = this.time.split(this.time.validTime().separator), parsedTime = '', count = this.time.validTime().count;
      var timeAppends = {
        '2': 'hour',
        '1': 'minute',
        '0': 'second'
      };
      if (count === 2) {
        for (var i = 0; i < splittedTime.length; i++) {
          if (splittedTime[i] === '00') {
            count--;
            continue;
          } else {
            parsedTime += n2w(splittedTime[i]) + ' ' + timeAppends[count] + this.time.validTime().separator;
            count--;
          }
        }
      } else {
        for (var i = 0; i < splittedTime.length; i++) {
          if (splittedTime[i] === '00') {
            continue;
          } else {
            parsedTime += n2w(splittedTime[i]) + this.time.validTime().separator;
          }
        }
      }
      return parsedTime.slice(0, parsedTime.length - 1);
    } else {
      return this.time;
    }
  }
}
export default Time;
