function squareDigits(num){
    // js  +  可以把string类型转换成number类型
    return +(num.toString().split('').map(e =>e*e).join(''));
    // return Number(num.toString().split('').map(e =>e*e).join(''));
    //may the code be with you
}
console.log(squareDigits(9119));