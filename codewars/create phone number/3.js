function createPhoneNumber(numbers) {
    // 编译一下
    numbers = numbers.join('');
    // es6 字符串模版
    // 编程风格
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3,6)}-${numbers.substring(6)}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));