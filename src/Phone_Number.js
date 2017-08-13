import n2w from './n2w.js';
class PhoneNumber {
  constructor (num) {
    this.num = num;
  }
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
