import Decider from './Decider.js'
class Identifier{
    constructor(str,main_arr) { 
        this.toParse = str;
        this.main_arr=main_arr;
    }
    getParsed() {
        const pattern=/[0-9]/;
        var splittedText=this.toParse.split(" "),index=0;
        const parsedArray=[];
        for(var i=0;i<splittedText.length;i++){
            if(pattern.test(splittedText[i])){
                parsedArray[index++]=[splittedText[i],i,0];
            }
        }
        (function(main_arr){
            var checkForDirtyBits=setInterval(function(){
                var flag=1;
                for(var i=0; i<parsedArray.length; i++){
                    flag = flag && parsedArray[i][2];
                }
                if(flag){
                     document.getElementById("output").innerHTML=main_arr.join(" ").toString();
                    clearTimeout(checkForDirtyBits);
                }
            },1);
        })(this.main_arr);
        var deciderObj = new Decider(parsedArray);
        deciderObj.decider(this.main_arr);
    } 
}
export default Identifier;