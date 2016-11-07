// Simple and stupid demo function for conversions

var stringHexToBin = require("./stringHexToBin").stringHexToBin;
var stringDecToHex = require("./stringDecToHex").stringDecToHex;
var stringAnyToDec  = require("./stringAnyToDec").stringAnyToDec;
var stringDecToAny  = require("./stringDecToAny").stringDecToAny;
var stringDecToBin  = require("./stringDecToBin").stringDecToBin;
var stringDecToHex  = require("./stringDecToHex").stringDecToHex;
var stringHexToDec  = require("./stringHexToDec").stringHexToDec;

function convert(value) {
console.log("DEC " +value+ " to:")
console.log("hex " + stringDecToHex(value));
console.log("bin " + stringDecToBin(value));
console.log("oct " + stringDecToAny(value,"8"));
console.log("24:  " + stringDecToAny(value,"24"));

console.log("\nHEX " +value+ " to:")
console.log("dec " + stringHexToDec(value));
console.log("bin " + stringHexToBin(value));
console.log("oct " + stringDecToAny(stringHexToDec(value),"8"));
console.log("24:  " + stringDecToAny(stringHexToDec(value),"24"));

console.log("\n32: " +value+ " to:")
console.log("dec  " + stringAnyToDec(value,"32"));
console.log("hex  " + stringDecToHex(stringAnyToDec(value,"32")));
console.log("12:  " + stringDecToAny(stringAnyToDec(value,"32"),"12"));

}

convert(process.argv[2])