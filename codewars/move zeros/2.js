// es6 新写法 有传入的isRight 就是传入的值 没有就默认为true
function move_zeros(arrNum, isRight = true) {
    let nonzeroes = arrNum.filter(e=>!(e===0))
    let zeroes = arrNum.filter(e=>(e===0))
    return isRight === true ?  nonzeroes.concat(zeroes) : zeroes.concat(nonzeroes);
    // console.log(nums);
    //Your Code logic should written here
}
console.log(move_zeros([1, 0, 3, 4, 0, 5], false));