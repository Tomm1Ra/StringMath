var stringSubtract = require ("./stringSubtract").stringSubtract;
var stringMultiply = require ("./stringMultiply").stringMultiply;

function stringModulo(a, b) {

    (!a) ? a="0" : a=a;
    (!b) ? b="0" : b=b;
    a = a.match(/[0-9]/g);
    b = b.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    b = (!b) ? "0" : b.join('');

    var aLen = a.length;
    var bLen = 1;
    var cLen;
    var result = "";
    var i,j,c,times;
    var helpNum = a.slice(0,bLen);
  
    for ( j=bLen; j <= aLen; j++) {
        for ( i = 1 ; i < 11 ; i++ ){
            times=0;
            
            c = stringMultiply(b,i.toString());
            cLen = c.length;
            if (cLen < helpNum.length) for (var cFix = 0; cFix < (helpNum.length - cLen); cFix++) { c = '0' + c; }
            if ((c > helpNum) || stringMultiply(b,i.toString()).length > helpNum.length) {times=i-1;break;}
        }
        result = result + times;
        helpNum=stringSubtract(helpNum,stringMultiply(times.toString(),b)) + a.slice(j,j+1)
    }
    result = result.replace(/^0+/,'');
    return result + " " + helpNum + "/"+b; 
}

module.exports.stringModulo = stringModulo; 