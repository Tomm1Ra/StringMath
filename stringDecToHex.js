var stringPowOpt = require("./stringPow").stringPowOpt;
var stringDiv = require("./stringDiv").stringDiv;
var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSubtract = require("./stringSubtract").stringSubtract;
var DecToHex = require("./BinDecHexMap.js").DecToHex


function stringDecToHex(a) {

    (!a) ? a="0" : a=a;
    a = a.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');

    var aLen = a.length;
    var result ="0";
    var x,i,j;
    var newChar=""
    
    i=0;
    while (stringDiv(a,stringPowOpt("16",i)).split(".")[0] > "0") {
    //console.log (i+". "+" >"+stringPowOpt("16",i)+"< "+stringDiv(a,stringPowOpt("16",i)).split(".")[0]) 
    i++;    
    }

    for ( j =  i-1; j >= 0; j--) {
        x = stringDiv(a,stringPowOpt("16",j)).split(".")[0]
        newChar = DecToHex(x)
        if (x != "0")  a = stringSubtract(a,stringMultiply(x,stringPowOpt("16",j)))
        result = result + newChar
    }
    return result;
}
module.exports.stringDecToHex = stringDecToHex