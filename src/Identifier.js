import Decider from './Decider.js';
class Identifier {
  constructor (str, mainArr) {
    this.toParse = str;
    this.mainArr = mainArr;
  }
  getParsed () {
    const pattern = /[0-9]/;
    var splittedText = this.toParse.split(' '), index = 0;
    const parsedArray = [];
    for (var i = 0; i < splittedText.length; i++) {
      if (pattern.test(splittedText[i])) {
        parsedArray[index++] = [splittedText[i], i, 0];
      }
    }
    (function (mainArr) {
      var checkForDirtyBits = setInterval(function () {
        var flag = 1;
        for (var i = 0; i < parsedArray.length; i++) {
          flag = flag && parsedArray[i][2];
        }
        if (flag) {
          document.getElementById('output').innerHTML = mainArr.join(' ').toString();
          clearTimeout(checkForDirtyBits);
        }
      }, 1);
    })(this.mainArr);
    var deciderObj = new Decider(parsedArray);
    deciderObj.decider(this.mainArr);
  }
}
export default Identifier;
