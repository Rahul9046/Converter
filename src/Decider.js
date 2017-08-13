import Cardinal from './Cardinal.js';
import PhoneNumber from './Phone_Number.js';
import Time from './Time.js';
import SuffixPrefix from './Suffix-Prefix.js';
import Date from './Date.js';
import DecimalFraction from './Decimal_Fraction.js';
String.prototype.contains = function (toCheck) {
  var splitStr = this.split('');
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === toCheck) {
      return true;
    }
  }
  return false;
};
class Decider {
  constructor (arr) {
    this.deciderArray = arr;
  }
  callbackToUpdate (index, value, parsing, mainArr) {
    mainArr[index] = value;
  }
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
            that.callbackToUpdate(deciderArray[j][1], convertedValue, parsing, arr);
          }, 0);
        })(i, deciderArr, this, arr);
      }
    }
  }
}
export default Decider;
