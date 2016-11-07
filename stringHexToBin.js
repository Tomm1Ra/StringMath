var stringPowOpt = require("./stringPow").stringPowOpt;
var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSubtract = require("./stringSubtract").stringSubtract;
var HexToBin = require("./BinDecHexMap.js").HexToBin;
var stringSum = require("./stringSum").stringSum;

function stringHexToBin(a) {

    (!a) ? a="0" : a=a;
    a = a.toUpperCase().match(/[0-F]/g);
    a = (!a) ? "0" : a.join('');

    var aLen = a.length;
    var result ="0";
    var x,i,j;
    var newChars=""
    

    for ( i =  0 ; i < aLen; i++) {
        newChars = HexToBin(a.charAt(i));
        result = result + newChars;
    }
    return result;
}
module.exports.stringHexToBin = stringHexToBin