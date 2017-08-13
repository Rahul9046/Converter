/**
 * @borrows n2w as n2w
 */
import n2w from './n2w.js';
/**
 * The Cardial class.
 * @class 
 */
class Cardinal {
  /**
   * Represents the cardinal number in numeric format 
   *@constructor 
   *@param {string} str-The cardinal string.
   */
  constructor (str) {
    this.toBeConverted = str;
  }
  /**
   * The method that converts cardinal numeric to cardinal string.
   * @function
   * @returns {string}
   */
  converter () {
    return n2w(this.toBeConverted);
  }
}
export default Cardinal;
