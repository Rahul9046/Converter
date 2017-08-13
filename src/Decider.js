/**
 * @borrows Cardinal as Cardinal
 */
import Cardinal from './Cardinal.js';
/**
 * @borrows PhoneNumber as PhoneNumber
 */
import PhoneNumber from './Phone_Number.js';
/**
 * @borrows Time as Time
 */
import Time from './Time.js';
/**
 * @borrows SuffixPrefix as SuffixPrefix
 */
import SuffixPrefix from './Suffix-Prefix.js';
/**
 * @borrows Date as Date
 */
import Date from './Date.js';
/**
 * @borrows DecimalFraction as DecimalFraction
 */
import DecimalFraction from './Decimal_Fraction.js';
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
 * The decider class
 * @class
 */
class Decider {
  /**
   * @constructor
   * @param {array} arr-The array that contains alpha-numeric words which will be converted.
   */
  constructor (arr) {
    this.deciderArray = arr;
  }
  /**
   * The callback which will be called after each conversion
   * @callback
   * @param {number} index-The index of the word in the main string which was passes as value in the text box. 
   * @param {number} value-The output which will be updated in the main string. 
   * @param {number} mainArr-The array that contains the outputs along with the index of each in the main string.  
   */
  callbackToUpdate (index, value, mainArr) {
    mainArr[index] = value;
  }
  /**
   * The method that decides what type of alphanumeric string each input is and then sends it to its respective module for conversion.
   * @function 
   * @param {arr} arr-The array that contains the alphanumeric texts
   */
  decider (arr) {
    var deciderArr;
    for (var i = 0; i < this.deciderArray.length; i++) {
      if (isNaN(this.deciderArray[i][0]) === false && (this.deciderArray[i][0].contains('.') === false)) {
        deciderArr = this.deciderArray;
        (function (j, deciderArray, that, arr) {
          var parsing = setTimeout(function (callbackToUpdate) {
            const cardinalObj = new Cardinal(deciderArray[j][0]);
            deciderArray[j][2] = 1;
            var convertedValue = cardinalObj.converter();
            that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
          }, 0);
        })(i, deciderArr, this, arr);
      } else if (this.deciderArray[i][0].contains(':') || this.deciderArray[i][0].contains('.') || this.deciderArray[i][0].contains('-') || this.deciderArray[i][0].contains('+') || this.deciderArray[i][0].contains('/')) {
        if (this.deciderArray[i][0].contains(':')) {
          deciderArr = this.deciderArray;
          (function (j, deciderArray, that, arr) {
            var parsing = setTimeout(function (callbackToUpdate) {
              const timeObj = new Time(deciderArray[j][0]);
              deciderArray[j][2] = 1;
              var convertedValue = timeObj.convertTime();
              that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
            }, 0);
          })(i, deciderArr, this, arr);
        } else if ((this.deciderArray[i][0].contains('-') && this.deciderArray[i][0].split('-').length === 3) || (this.deciderArray[i][0].contains('/') && this.deciderArray[i][0].split('/').length === 3)) {
          deciderArr = this.deciderArray;
          (function (j, deciderArray, that, arr) {
            var parsing = setTimeout(function (callbackToUpdate) {
              const dateobj = new Date(deciderArray[j][0]);
              deciderArray[j][2] = 1;
              var convertedValue = dateobj.convert();
              that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
            }, 0);
          })(i, deciderArr, this, arr);
        } else if (this.deciderArray[i][0].contains('+') || (this.deciderArray[i][0].contains('-') && this.deciderArray[i][0].split('-').length === 2 && (this.deciderArray[i][0].split('-')[0].contains('+') || this.deciderArray[i][0].split('-')[0] === '0'))) {
          deciderArr = this.deciderArray;
          (function (j, deciderArray, that, arr) {
            var parsing = setTimeout(function (callbackToUpdate) {
              const phnNumObj = new PhoneNumber(deciderArray[j][0]);
              deciderArray[j][2] = 1;
              var convertedValue = phnNumObj.converter();
              that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
            }, 0);
          })(i, deciderArr, this, arr);
        } else if (this.deciderArray[i][0].contains('.') || (this.deciderArray[i][0].contains('-') && this.deciderArray[i][0].split('-').length === 2) || (this.deciderArray[i][0].contains('/') && this.deciderArray[i][0].split('/').length === 2)) {
          deciderArr = this.deciderArray;
          (function (j, deciderArray, that, arr) {
            var parsing = setTimeout(function (callbackToUpdate) {
              const decFracObj = new DecimalFraction(deciderArray[j][0]);
              deciderArray[j][2] = 1;
              var convertedValue = decFracObj.convert();
              that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
            }, 0);
          })(i, deciderArr, this, arr);
        }
      } else {
        deciderArr = this.deciderArray;
        (function (j, deciderArray, that, arr) {
          var parsing = setTimeout(function (callbackToUpdate) {
            const sufpreObj = new SuffixPrefix(deciderArray[j][0]);
            deciderArray[j][2] = 1;
            var convertedValue = sufpreObj.convert();
            that.callbackToUpdate(deciderArray[j][1], convertedValue, arr);
          }, 0);
        })(i, deciderArr, this, arr);
      }
    }
  }
}
export default Decider;
