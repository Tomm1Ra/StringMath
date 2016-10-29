var arr = ["0","1"];

var stringSum = require ("./stringSum").stringSum;

function fibonacci(n) {
        for (var i = 2; i < n; i++){      
        arr[arr.length] = stringSum(arr[arr.length-1] , arr[arr.length -2]); 
        console.log((i-1)+". "+arr.shift());
}
     return arr.shift();   
}

var a = fibonacci(parseInt(process.argv[2],10)+1);

console.log(process.argv[2]+". "+a);