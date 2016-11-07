var stringPowOpt = require("./stringPow").stringPowOpt;
var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSubtract = require("./stringSubtract").stringSubtract;
var HexToBin = require("./BinDecHexMap.js").HexToBin;
var stringSum = require("./stringSum").stringSum;
var stringHexToBin = require("./stringHexToBin").stringHexToBin;
var stringDecToHex = require("./stringDecToHex").stringDecToHex;
function stringDecToBin(a) {

    (!a) ? a="0" : a=a;
    a = a.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    
    return stringHexToBin(stringDecToHex(a).substr(1)).substr(1)

}
module.exports.stringDecToBin = stringDecToBin