var stringSum = require("./stringSum").stringSum;
var stringSubtract = require("./stringSubtract").stringSubtract;

function stringArraySum(array) {
    var result =""
    if ((array[0][0]=='-') && (array[1][0]=='-'))  
        result = "-" + stringSum(array[0],array[1]);
    else if ((array[0][0]=='-') && (array[1][0]!='-'))
        result = stringSubtract(array[1],array[0]);
    else if ((array[0][0]!='-') && (array[1][0]=='-'))
        result = stringSubtract(array[0],array[1]);
    else 
        result = stringSum(array[0],array[1]);

    //if (array.length<=2) return result

    for (var i = 2; i < array.length; i++) {
        if ((array[i][0]=='-') && (result[0]=='-'))  
            result = "-" + stringSum(result,array[i]);
        else if ((result[0]=='-') && (array[i][0]!='-'))
            result = stringSubtract(array[i],result);
        else if ((result[0]!='-') && (array[i][0]=='-'))
            result = stringSubtract(result,array[i]);
        else 
            result = stringSum(result,array[i]);
    }

    return result;
}

module.exports.stringArraySum = stringArraySum;
