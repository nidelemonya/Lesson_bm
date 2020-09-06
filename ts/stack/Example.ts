import Stack from './lib/Stack'
import ObjStack from './lib/ObjStack';

const decimalToBinary = function (decNumber: number) {
    const stack = new Stack()
    let number = decNumber;
    let rem ; // 余数
    let binaryString = '';
    while(number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 依次最后出栈
    }
    return binaryString;
}

const decimalToBinaryObjStack = function (decNumber: number): string {
    const stack = new ObjStack();
    let number = decNumber;
    let rem; // 余数
    let binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2)
    }
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString(); // 一次出栈
    }
    return binaryString;
}

// console.time 执行调试
// console.timeEnd 测试性能 计时
const testNumber = 9999321321374899;
console.time("数组栈")
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈")

console.time("对象栈")
console.log(decimalToBinaryObjStack(testNumber))
console.timeEnd("对象栈")