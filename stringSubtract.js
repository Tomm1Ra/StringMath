// calculates subtraction of two numeric string
function stringSubtract(a, b) {

    (!a) ? a="0" : a=a;
    (!b) ? b="0" : b=b;
    a = a.match(/[0-9]/g);
    b = b.match(/[0-9]/g);
    a = (!a) ? "0" : a.join('');
    b = (!b) ? "0" : b.join('');

    var aLen = a.length;
    var bLen = b.length;
    var maxLen = aLen > bLen ? aLen : bLen;
    var d = [];
    var z = 0;
    for (var i = 0; i <= maxLen; i++) {
        aValue = (i >= a.length) ? "0".charCodeAt(0) : a[a.length - i - 1].charCodeAt(0);
        bValue = (i >= b.length) ? "0".charCodeAt(0) : b[b.length - i - 1].charCodeAt(0);
        index = maxLen - i;
        d[index] = (aValue - bValue - z ); 
        (d[index] < 0) ? ( d[index] = d[index] + 10, z = 1 ) : z = 0;
    }        

    if (z == 1) {return '-'+stringSubtract(b,a);}
    // console.log(d.join(''));
    return (!d.join('').replace(/^[0]+(?=[0-9]+$)/,'')) ? "0" : d.join('').replace(/^[0]+(?=[0-9]+$)/,'');
}

module.exports.stringSubtract = stringSubtract;
