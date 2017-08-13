var keywords = {
  'factors': {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100
  },
  'multipliers': {
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000,
    'quadrillion': 1000000000000000,
    'quintillion': 1000000000000000000
  },
  'Ty': {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
  },
  'append': {
    '3': 'thousand',
    '6': 'million',
    '9': 'billion',
    '12': 'trillion',
    '15': 'quadrillion',
    '18': 'quintillion'
  },
  'pluralMultipliers': {
    'hundreds': '100s',
    'thousands': '1000s',
    'millions': '1000000s',
    'billion': '1000000000s',
    'trillion': '1000000000000s',
    'quadrillion': '1000000000000000s',
    'quintillion': '1000000000000000000s'
  }
};
export default (num) => {
  var text = '', indexing = [];
  var splitStr = num.split('');
  for (var i = splitStr.length - 1; i >= 0; i--) {
    indexing.push(i);
  }
  for (var i = 0; i < splitStr.length; i++) {
    if (indexing[i] % 3 === 2) {
      for (var keys in keywords.factors) {
        if (keywords.factors[keys] === splitStr[i]) {
          text += keys + ' hundred ';
        }
      }
    } else if (indexing[i] % 3 === 1) {
      if (splitStr[i] !== 1) {
        for (var keys in keywords.Ty) {
          if (keys === splitStr[i]) {
            if (text.split(' ').slice(-2, -1) === 'hundred' || text.split(' ').slice(-2, -1) === 'thousand') {
              text += 'and ' + keywords.Ty[keys] + ' ';
            } else {
              text += keywords.Ty[keys] + ' ';
            }
          }
        }
      } else {
        if (splitStr[i + 1] !== 0) {
          for (var keys in keywords.factors) {
            if (keywords.factors[keys] === (splitStr[i] + splitStr[i + 1])) {
              if (text.split(' ').slice(-2, -1) === 'hundred' || text.split(' ').slice(-2, -1) === 'thousand') {
                text += 'and ' + keys + ' ';
                splitStr[i + 1] = 0;
              } else {
                text += keys + ' ';
                splitStr[i + 1] = 0;
              }
            }
          }
        } else {
          if (text.split(' ').slice(-2, -1) === 'hundred' || text.split(' ').slice(-2, -1) === 'thousand') {
            text += 'and ten ';
          } else {
            text += 'ten ';
          }
        }
      }
    } else {
      if (splitStr[i] !== 0) {
        for (var keys in keywords.factors) {
          if (keywords.factors[keys] === splitStr[i]) {
            if (text.split(' ').slice(-2, -1) === 'hundred' || text.split(' ').slice(-2, -1) === 'thousand') {
              text += 'and ' + keys + ' ';
            } else {
              text += keys + ' ';
            }
          }
        }
      } else if (splitStr[i] === '0' && splitStr.length === 1) {
        text += 'zero ';
      }
      for (var keys in keywords.append) {
        if (indexing[i] === keys) {
          if (splitStr[i] !== 0 || splitStr[i - 1] !== 0 || splitStr[i - 2] !== 0) { text += keywords.append[keys] + ' '; }
        }
      }
    }
  }
  if (text.slice(-1) === ' ') {
    text = text.slice(0, text.length - 1);
  }
  return text;
};
