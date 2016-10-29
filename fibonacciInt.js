var arr = [0,1];


function fibonacci(n) {
for (var i = 2; i < n; i++) {         
        arr[arr.length] = arr[arr.length-1] + arr[arr.length -2]; 
        arr.shift();
}
        return arr.shift();
}

var a = fibonacci(parseInt(process.argv[2],10)+1);
 


//console.log(i-1+". "+fibonacci(i));
//        arr.push(fibonacci(i));
//console.log(arr.join(', '));
//console.log(JSON.stringify(cache));
console.log(a);