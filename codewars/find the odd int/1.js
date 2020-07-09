function findOdd(A) {
    //happy coding!
    // return 0
    // 两个相等的数异或为 0；一个不为 0的数与 0 异或为这个数本身
   return A.reduce((sum,e)=>{
       return sum = sum ^ e;
   },0);
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))