import n2w from './n2w.js'
var date={
    "1":"january",
    "2":"february",
    "3":"march",
    "4":"april",
    "5":"may",
    "6":"june",
    "7":"july",
    "8":"august",
    "9":"september",
    "10":"october",
    "11":"november",
    "12":"december"
};
var ordinals={
                "first":[1,"st"],
                "second":[2,"nd"],
                "third":[3,"rd"],
                "fourth":[4,"th"],
                "fifth":[5,"th"],
                "sixth":[6,"th"],
                "seventh":[7,"th"],
                "eigth":[8,"th"],
                "ninth":[9,"th"],
                "tenth":[10,"th"],
                "eleventh":[11,"th"],
                "twelfth":[12,"th"],
                "thirteenth":[13,"th"],
                "fourteenth":[14,"th"],
                "fifteenth":[15,"th"],
                "sixteenth":[16,"th"],
                "seventeenth":[17,"th"],
                "eighteenth":[18,"th"],
                "nineteenth":[19,"th"],
                "twentyth":[20,"th"]
               };
String.prototype.contains=function(toCheck){
    var splitStr=this.split("");
    for(var i=0; i<splitStr.length; i++){
        if(splitStr[i]===toCheck){
            return true;
        }
    }
    return false;    
}
class Date{
    constructor(str){
        this.date=str;
    }
    convert(){
        var parsedStr="",tobeParsed="";
        if(this.date.contains('/')){
            var splitStr=this.date.split("/");
            if(splitStr[0].slice(0,1)==='0'){
                splitStr[0]=splitStr[0].slice(1)
            }
            if(splitStr[0].length===2){ 
                if(splitStr[0].slice(0,1)==='1'){
                    tobeParsed=splitStr[0];
                }
                else{
                    parsedStr+=n2w(splitStr[0].slice(0,1)+'0')+" ";
                    tobeParsed=splitStr[0].slice(-1);
                }  
            }
            else{
                tobeParsed+=splitStr[0];
            }
            for(var keys in ordinals){
                if(ordinals[keys][0] === Number(tobeParsed)){
                        parsedStr+=keys+" ";
                        tobeParsed="";   
                }
            }

            if(splitStr[1].slice(0,1)==='0'){
                splitStr[1]=splitStr[1].slice(1);
            }
            for(var keys in date){
                if(keys === splitStr[1]){
                    parsedStr+=date[keys]+" ";
                }
            }
            parsedStr+=n2w(splitStr[2]);
        }
        else if(this.date.contains('-')){
            var splitStr=this.date.split("-");
            if(splitStr[0].slice(0,1)==='0'){
                splitStr[0]=splitStr[0].slice(1)
            }
            if(splitStr[0].length===2){ 
                if(splitStr[0].slice(0,1)==='1'){
                    tobeParsed=splitStr[0];
                }
                else{
                    parsedStr+=n2w(splitStr[0].slice(0,1)+'0')+" ";
                    tobeParsed=splitStr[0].slice(-1);
                }  
            }
            else{
                tobeParsed+=splitStr[0];
            }
            for(var keys in ordinals){
                if(ordinals[keys][0] === Number(tobeParsed)){
                        parsedStr+=keys+" ";
                        tobeParsed="";   
                }
            }

            if(splitStr[1].slice(0,1)==='0'){
                splitStr[1]=splitStr[1].slice(1);
            }
            for(var keys in date){
                if(keys === splitStr[1]){
                    parsedStr+=date[keys]+" ";
                }
            }
            parsedStr+=n2w(splitStr[2]);
        }
        return parsedStr;
    }
}
export default Date;