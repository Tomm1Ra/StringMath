var stringPowOpt = require("./stringPow").stringPowOpt;
var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSubtract = require("./stringSubtract").stringSubtract;
var AnyToDec = require("./BinDecHexMap.js").AnyToDec
var stringSum = require("./stringSum").stringSum;

function stringAnyToDec(a,b) {

    (!a) ? a="0" : a=a;
    a = a.toUpperCase().match(/[0-Z]/g);
    a = (!a) ? "0" : a.join('');

    var aLen = a.length;
    var result ="0";
    var x,i,j;
    var newChar=""
    

    for ( i =  0 ; i < aLen; i++) {
        newChar = AnyToDec(a.charAt(i))
        result = stringSum(result , stringMultiply(newChar,stringPowOpt(b,aLen-1-i)))
    }
    return result;
}
module.exports.stringAnyToDec = stringAnyToDec