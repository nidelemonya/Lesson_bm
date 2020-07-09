// 限制：一直循环到n，或n/2，将太慢。
function isPrime(num) {
    //TODO
    if (num <= 1) return false
    for(let i=2; i <= Math.sqrt(num);i++){
        // 可以先判断是不是合数
        if(num % i === 0) {
            return false;
        }
    }
    return true
}

console.log(isPrime(4));
console.log(isPrime(41));
console.log(isPrime(5099));
console.log(isPrime(1218794911));