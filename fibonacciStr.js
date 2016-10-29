var arr = ["0","1"];

//var stringSum = require ("./stringSum").stringSum;

function stringSum(a, b) {
    var maxLen = (a.length > b.length ? a.length : b.length) - 1;
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
        return d.join('');
    //return d.join('').replace(/^[0]+(?=[0-9]+$)/,''); // remove leading zeroes
}


function fibonacci(n) {
        for (var i = 2; i < n; i++){      
        arr[arr.length] = stringSum(arr[arr.length-1] , arr[arr.length -2]); 
        arr.shift();
}
     return arr.shift();
}

//for (var i = 2; i < parseInt(process.argv[2],10)+2; i++) 
var a = fibonacci(parseInt(process.argv[2],10)+1);

console.log(process.argv[2]+". "+a);