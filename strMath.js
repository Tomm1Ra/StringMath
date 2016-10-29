var stringMultiply = require("./stringMultiply").stringMultiply;
var stringSum = require("./stringSum").stringSum;
var stringPow = require("./stringPow").stringPow;
var stringSubtract = require("./stringSubtract").stringSubtract;
var stringPowOpt = require("./stringPow").stringPowOpt;
var stringDiv = require("./stringDiv").stringDiv;
var stringFactorial = require("./stringPow").stringFactorial;
var parseOperator = require("./strMathUtils").parseOperator;
var validateParam = require("./strMathUtils").validateParam;

var input = "";
process.argv.forEach((val, index) => {
    if (val === '\*') val = 'X';
    if (index > 1) input = input + " " + val;
});

var operator = parseOperator(input);
operator = (operator) ? operator.pop() : "\+";
var leftValue = input.split(operator)[0].split(',').pop();
var rightValue = input.split(operator)[1];
//var decimals = input.split(' ').pop();
leftValue = validateParam(leftValue);
rightValue = validateParam(rightValue);

console.log(leftValue + " "+operator+ " "+ rightValue);

switch (operator) {
    case '\+':
        var a = stringSum(leftValue, rightValue);
        break;
    case '-':
        var a = stringSubtract(leftValue, rightValue);
        break;
    case '\*':
    case 'x':
    case 'X':
        var a = stringMultiply(leftValue, rightValue);
        break;
    case '\/':
        var a = stringDiv(leftValue, rightValue, "10");
        break;
    case '\^':
        var a = stringPowOpt(leftValue, rightValue);
        break;
    case '!':
        var a = stringFactorial(leftValue);
        break

    default: console.log("unknown operation");
}
console.log("Result: " + a);

