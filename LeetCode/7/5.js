/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let flag = x > 0 ? '' : '-'
    let val = flag;
    if(x < 0) x = Math.abs(x);
    let arr = [...x.toString()];
    // console.log(arr);
    for(let i = arr.length-1; i >= 0; i--){
        val += arr[i]
    }
    val = parseInt(val)
    // console.log(val);
    return (val >= Math.pow(-2, 31) && val <=Math.pow(2, 31)-1) ? val : 0;
};
reverse(-178491);
