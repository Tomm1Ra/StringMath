var stringPowOpt = require("./stringPow").stringPowOpt;
var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSubtract = require("./stringSubtract").stringSubtract;
var HexToDec = require("./BinDecHexMap.js").HexToDec
var stringSum = require("./stringSum").stringSum;

function stringHexToDec(a) {

    (!a) ? a="0" : a=a;
    a = a.toUpperCase().match(/[0-F]/g);
    a = (!a) ? "0" : a.join('');

    var aLen = a.length;
    var result ="0";
    var x,i,j;
    var newChar=""
    

    for ( i =  0 ; i < aLen; i++) {
        newChar = HexToDec(a.charAt(i))
        result = stringSum(result , stringMultiply(newChar,stringPowOpt("16",aLen-1-i)))
    }
    return result;
}
module.exports.stringHexToDec = stringHexToDec