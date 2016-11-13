var arr = ["0","0","0","0","0","1"];

var stringArraySum = require ("./stringArraySum").stringArraySum;

function heksanacci(n,all) {
    for (var i = 6; i < n; i++){      
        arr[arr.length] = stringArraySum(arr); 
        arr.shift();
        if (all) console.log(i+1+". "+arr[arr.length-1]);
    }

    if (n==0) return "*";
    if (n<6) return arr[n-1];
    return arr.pop();
}

var a = heksanacci(parseInt(process.argv[2],10),process.argv[3]);

console.log("\n"+process.argv[2]+". "+a);