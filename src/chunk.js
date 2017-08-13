import Identifier from './Identifier.js'
let chunk=(str)=>{
        let main_arr =str.split(" ");
        var identifierObj = new Identifier(str,main_arr);
        identifierObj.getParsed();
}
document.getElementById("convert").addEventListener("click",function(){
    var text=document.getElementById("input").value;
    chunk(text);
});