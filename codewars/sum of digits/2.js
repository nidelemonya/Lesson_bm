function digital_root(n) {
    let arr = n.toString().split("").map((e)=>{
        return parseInt(e);
    })
    let value = arr.reduce((sum,val)=>{
        return sum + val;
    },0)
    return  (arr.length === 1) ?  value : digital_root(value);
    // ...
}

console.log(digital_root(125))
console.log(digital_root(16))
console.log(digital_root(456))