/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
    if ( n === 0 ) return 1
    if ( n < 0 ) return 1/myPow(x,-n)
    if (n % 2) return x*myPow(x,n-1) //n是奇数时 x的n次方 = x*x的n-1次方
    return myPow(x*x,n/2)
    // return n % 2 === 0 ? myPow(x*x,n/2) : x*myPow(x,n-1) //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
};

console.log(myPow(2,10))