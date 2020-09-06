"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack");
var ObjStack_1 = require("./lib/ObjStack");
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
var decimalToBinaryObjStack = function (decNumber) {
    var stack = new ObjStack_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 一次出栈
    }
    return binaryString;
};
// console.time 
// console.timeEnd 测试性能 计时
var testNumber = 9999321321374899;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");
console.time("对象栈");
console.log(decimalToBinaryObjStack(testNumber));
console.timeEnd("对象栈");
