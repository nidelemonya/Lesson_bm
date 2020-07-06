function narcissistic(value) {
    // Code me to return true or false
    let arr = value.toString().split("");
    return (value === arr.map((m)=>{
        return parseInt(m);
    }).reduce((sum,e)=>{
        // Math.pow() 方法返回基础的指数次幂
        // console.log(typeof e)
        return sum + Math.pow(e,arr.length);
    },0)) ? true : false;
}

// 使用reduce 方法一定要提供一个初始值 initial_val 不然回调方法会跳过索引0直接从索引1执行。
// console.log(narcissistic(7))
console.log(narcissistic(371))
  