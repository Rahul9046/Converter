/**
 * @borrows Identifier as Identifier
 */
import Identifier from './Identifier.js'
/**
 * Takes the input in string,splits it and sends it to Identifier for parsing.
 * @function 
 * @param {string} str-The input to be parsed 
 */
let chunk=(str)=>{
        let mainArr =str.split(" ");
        var identifierObj = new Identifier(str,mainArr);
        identifierObj.getParsed();
}
/**
 * Gets the text from the text box and sends it to chunk for parsing.
 * @fires document#click
 */
document.getElementById("convert").addEventListener("click",
/**
 * @event document#click
 */
function(){
    var text=document.getElementById("input").value;
    chunk(text);
});