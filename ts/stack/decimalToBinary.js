"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack");
var decimalToBinary = function (decNumber) {
    var stack = new Stack_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 依次最后出栈
    }
    return binaryString;
};
console.log(decimalToBinary(5));
