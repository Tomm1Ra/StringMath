var stringPowOpt = require("./stringPow").stringPowOpt;
var stringDiv = require("./stringDiv").stringDiv;
var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSubtract = require("./stringSubtract").stringSubtract;
var DecToAny = require("./BinDecHexMap.js").DecToAny


function stringDecToAny(a,b) {

    (!a) ? a="0" : a=a;
    a = a.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');

    (!b) ? b="16" : b=b;
    b = b.match(/[0-9]/g);
    b = (!b) ? "16" : b.join('');
    if ((b=="0") || (b=="1")) b="2"

    var aLen = a.length;
    var result ="0";
    var x,i,j;
    var newChar=""

    i=0;
    while (stringDiv(a,stringPowOpt(b,i)).split(".")[0] > "0") {
      i++;    
    }

    for ( j =  i-1; j >= 0; j--) {
        x = stringDiv(a,stringPowOpt(b,j)).split(".")[0]
        newChar = DecToAny(x)
        if (x != "0")  a = stringSubtract(a,stringMultiply(x,stringPowOpt(b,j)))
        result = result + newChar
    }
    return result;
}

module.exports.stringDecToAny = stringDecToAny
