/**
 * @borrows Decider as Decider
 */
import Decider from './Decider.js';
/**
 * The Identifier class
 * @class
 */
class Identifier {
  /**
   * @constructor
   * @param {string} str-The main string which was passed as input to the text box. 
   * @param {array} mainArr-The array that contains the splitted texts. 
   */
  constructor (str, mainArr) {
    this.toParse = str;
    this.mainArr = mainArr;
  }
  /**
   * The method which filters out the alphanumeric texts and passes it to Decider for further processing.
   * @function
   */
  getParsed () {
    const pattern = /[0-9]/;
    var splittedText = this.toParse.split(' '), index = 0;
    const parsedArray = [];
    for (var i = 0; i < splittedText.length; i++) {
      if (pattern.test(splittedText[i])) {
        parsedArray[index++] = [splittedText[i], i, 0];
      }
    }
    /**
     * The event that fires when all the alphanumeric texts have been converted to its string representations.
     * @event
     * @param {array} mainArr-The array that contains the splitted texts.
     */
    (function (mainArr) {
      var checkForUsedBits = setInterval(function () {
        var flag = 1;
        for (var i = 0; i < parsedArray.length; i++) {
          flag = flag && parsedArray[i][2];
        }
        if (flag) {
          document.getElementById('output').innerHTML = mainArr.join(' ').toString();
          clearTimeout(checkForUsedBits);
        }
      }, 1);
    })(this.mainArr);
    var deciderObj = new Decider(parsedArray);
    deciderObj.decider(this.mainArr);
  }
}
export default Identifier;
