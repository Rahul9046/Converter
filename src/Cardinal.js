import n2w from './n2w.js';
class Cardinal {
  constructor (str) {
    this.toBeConverted = str;
  }
  converter () {
    return n2w(this.toBeConverted);
  }
}
export default Cardinal;
