function digital_root(n) {
    let value = n.toString().split("").reduce((sum,e)=>{
        return sum + parseInt(e);
    },0)
    return  value < 10 ? value : digital_root(value)
    // ...
}

console.log(digital_root(125))
console.log(digital_root(16))
console.log(digital_root(456))