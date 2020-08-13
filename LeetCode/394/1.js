/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let numStack = [] // 存倍数的数字栈
    let strStack = [] // 存待拼接的 str 栈
    let num = 0 // 搬运 倍数
    let result = '' // 搬运字符串
    for(let char of s) {
        if (!isNaN(parseInt(char))) {
            num = num * 10 + parseInt(char);
        }
        else if (char === '[') {
            strStack.push(result)
            result = ''
            numStack.push(num)
            num = 0
        }
        else if ( char === ']'){
            let repeatTimes = numStack.pop()
            result = strStack.pop() + result.repeat(repeatTimes)
        }
        else {
            result += char
        }
    }
    return result
};

// console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('100[leetcode]'));
console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('3[a2[c]]'));
// console.log(decodeString('3[a2[c]]'));
// console.log(decodeString('3[a2[c]]'));