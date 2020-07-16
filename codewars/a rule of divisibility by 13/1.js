function tool(n) {
    let arr = [1,10,9,12,3,4]
    return  n.toString().split('').reverse().reduce((sum,e,i) => {
        (i>=6) ? i%=6 : i
        return sum = Number(sum) + Number((e)*arr[i])
    })
}
function thirt(n) {
    // your code
    let res = Number(tool(n))
    // console.log(n,res)
    if (n !== res)  return thirt(res)
    return res
}
console.log(thirt(9))
console.log(thirt(321))
console.log(thirt(5634))
console.log(thirt(148))
console.log(thirt(57))
console.log(thirt(85299258))
console.log(thirt(1111111111))
console.log(thirt(987654321))