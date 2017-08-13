import n2w from './n2w.js';
var keywords = {
  'cardinal': {
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
  }
};
class SuffixPrefix {
  constructor (str) {
    this.str = str;
  }
  convert () {
    var parsedStr = '';
    if ((this.str.slice(-2) === 'st' || this.str.slice(-2) === 'th' || this.str.slice(-2) === 'rd' || this.str.slice(-2) === 'nd') && (isNaN(this.str.slice(0, this.length - 2)) === false)) {
      if (this.str.slice(-4, -3) !== '1') {
        if (this.str.slice(0, this.str.length - 3) !== '') {
          parsedStr += n2w(this.str.slice(0, this.str.length - 3) + '0') + ' ';
        }
        for (var keys in keywords.cardinal) {
          if ((keywords.cardinal[keys][0] + keywords.cardinal[keys][1]) === this.str.slice(-3)) {
            parsedStr += keys;
          }
        }
      } else {
        if (this.str.slice(0, this.str.length - 4) !== '') {
          parsedStr += n2w(this.str.slice(0, this.str.length - 4) + '00') + ' ';
        }
        for (var keys in keywords.cardinal) {
          if ((keywords.cardinal[keys][0] + keywords.cardinal[keys][1]) === this.str.slice(-4)) {
            parsedStr += keys;
          }
        }
      }
    } else {
      var splitStr = this.str.split(''), toBeParsed = '';
      for (var i = 0; i < splitStr.length; i++) {
        if (isNaN(splitStr[i]) === false) {
          toBeParsed += splitStr[i];
          if (i === splitStr.length - 1) {
            parsedStr += n2w(toBeParsed);
          }
        } else {
          if (toBeParsed === '') {
            parsedStr += splitStr[i];
          } else if (toBeParsed !== '' && i === splitStr.length) {
            parsedStr = n2w(toBeParsed) + splitStr[i];
            toBeParsed = '';
          } else {
            parsedStr = n2w(toBeParsed) + splitStr[i];
            toBeParsed = '';
          }
        }
      }
    }
    return parsedStr;
  }
}
export default SuffixPrefix;
