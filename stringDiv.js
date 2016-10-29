var stringSubtract = require ("./stringSubtract").stringSubtract;
var stringMultiply = require ("./stringMultiply").stringMultiply;

function stringDiv(a, b, decimals) {

    (!a) ? a="0" : a=a;
    (!b) ? b="0" : b=b;
    (!decimals) ? decimals="2" : decimals=decimals;
    a = a.match(/[0-9]/g);
    b = b.match(/[0-9]/g);
    decimals = decimals.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    b = (!b) ? "0" : b.join('');
    decimals = (!decimals) ? "2" :decimals.join('');

    var aLen = a.length;
    var bLen = b.length;
    var cLen;
    var result = "";
    var i,j,c,times;
    bLen=1;
    var helpNum = a.slice(0,bLen);
  
    for ( j=bLen; j <= aLen + parseInt(decimals); j++) {
        c=b;
        for ( i = 1 ; i < 11 ; i++ ){
            times=0;
            
            c = stringMultiply(b,i.toString());
            cLen = c.length;
            if (cLen < helpNum.length) for (var cFix = 0; cFix < (helpNum.length - cLen); cFix++) { c = '0' + c; }
            if ((c > helpNum) || stringMultiply(b,i.toString()).length > helpNum.length) {times=i-1;break;}
        }
        result = result + times;
        helpNum=stringSubtract(helpNum,stringMultiply(times.toString(),b)) + a.slice(j,j+1)
        if (j==aLen) result=result+".";
        if (j>=aLen) helpNum=helpNum+"0";
    }
    result = result.replace(/^0+/,'');
    if (result[0]=='.') result = '0'+result;
    return result;
}

module.exports.stringDiv = stringDiv;