// calculates sum of two numeric string
function stringSum2(a, b) {
    var aLen = a.length;
    var bLen = b.length;
    var maxLen = aLen > bLen ? aLen : bLen;
    var d = [];
    var z = 0;
    if (aLen < maxLen) for (var aFix = 0; aFix < (maxLen - aLen); aFix++) { a = '0' + a; }
    if (bLen < maxLen) for (var bFix = 0; bFix < (maxLen - bLen); bFix++) { b = '0' + b; }

    for (var i = maxLen; i > 0; i--) {
        d[i + 1] = parseInt(a[i - 1]) + parseInt(b[i - 1]) + z;
        if (d[i + 1] > 9) { d[i + 1] = d[i + 1] % 10; z = 1; } else z = 0;
    }
    if (z == 1) d[0] = z.toString();
    // console.log(d.join(''));
    return d.join('');
}


function stringSum(a, b) {
    (!a) ? a="0" : a=a;
    (!b) ? b="0" : b=b;
    a = a.match(/[0-9]/g);
    b = b.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    b = (!b) ? "0" : b.join('');
    
    var maxLen = a.length > b.length ? a.length : b.length;
    var d = [];
    var z = 0;
    var aValue ,bValue;
    var index;

    for (var i = 0; i <= maxLen; i++) {
        aValue = (i >= a.length) ? "0".charCodeAt(0) : a[a.length - i - 1].charCodeAt(0);
        bValue = (i >= b.length) ? "0".charCodeAt(0) : b[b.length - i - 1].charCodeAt(0);
        
        index = maxLen - i;
        d[index] = (aValue + bValue + z - 96).toString(); // 96 = 2 * "0".charCodeAt(0)
        (d[index].length > 1) ? ( d[index] = d[index][1], z = 1 ) : z = 0;
    }
    (z == 1) ? d.unshift(z.toString()) : z == 0 ;
    //console.log(d);
    return d.join('').replace(/^[0]+(?=[0-9]+$)/,''); // remove leading zeroes
}

module.exports.stringSum = stringSum;
