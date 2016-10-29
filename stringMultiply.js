var stringSum = require ("./stringSum").stringSum;

function stringMultiply(a, b) {

    (!a) ? a="0" : a=a;
    (!b) ? b="0" : b=b;
    a = a.match(/[0-9]/g);
    b = b.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    b = (!b) ? "0" : b.join('');

    var aLen = a.length;
    var bLen = b.length;
    var d = "0";
    var result ="0";
    var x,i,j;
    
    for ( j=  0; j < aLen; j++) {
    for ( i = 0; i < bLen; i++) {
        d = "0" + (a[j].charCodeAt(0) - 48) * (b[i].charCodeAt(0) -48)
        for( x=j; x < aLen-1 + bLen-i-1; x++) { d += "0"}

        d = d.replace(/^0+/,'');
        result = stringSum(result, d);
        result = result.replace(/^[0]+(?=.*[0-9])/,'');
    }
//    console.log("res:"+result);
    }
    return result;
}

module.exports.stringMultiply = stringMultiply;