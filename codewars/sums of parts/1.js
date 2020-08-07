function partsSums(ls) {
    // your code
    let res = ls.reduce((sum,e) => (sum = sum + e),0)
    ls.unshift(0)
    return ls.map((m, i) => {
        res -= m
        return res
    })
}

console.log(partsSums([0, 1, 3, 6, 10]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))