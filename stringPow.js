// calculates power (a^b) of two numeric string

var stringMultiply = require ("./stringMultiply").stringMultiply;

function stringPow(a, b) {

    (!a) ? a="0" : a=a;
    (!b) ? b="0" : b=b;
    a = a.match(/[0-9]/g);
    b = b.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    b = (!b) ? "0" : b.join('');

    var result ="1";
    for (var n = 0; n < parseInt(b); n++) {
        result = stringMultiply(result, a);
    }
    return result;
}

function stringFactorial(a) {


    var result ="1";
    for (var n = 0; n < parseInt(a); n++) {
        result = stringMultiply(result, (n+1).toString());
    }
    return result;
}

function stringPowOpt(a, b) {

    var result = "1";
    var res1 = "1";
    var n=2;
    var last=0;
    var bInt=parseInt(b);
    ns = "";
    var resArray = [];
    var arrValue=0;
    res1 = stringMultiply(res1, a);
    resArray.push (a);
    do {
        res1 = stringMultiply(res1, res1);
        resArray.push(res1);
        last = n;
        n = n * 2;
    } while (n <= bInt);
    
    //console.log(resArray);
    while (last){
        arrValue = resArray.pop();
        result = (bInt >= last) ? stringMultiply(result,arrValue) : result;
        bInt = (bInt >= last) ? bInt-last : bInt;
        last = last>>1;  
    }

    return result;
}

module.exports.stringPow = stringPow;
module.exports.stringFactorial = stringFactorial;
module.exports.stringPowOpt = stringPowOpt;
