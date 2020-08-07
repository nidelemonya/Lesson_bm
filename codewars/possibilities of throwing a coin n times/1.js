function coin(n) {
    // Return all possible combinations in alphabetic order
    // return ('H'.split('') + ' ' + 'T').split(' ')
    return --n ? coin(n).reduce((a, e) => (a.push(...["H", "T"].map((v) => e + v)), a), []) : ["H", "T"];
    // .split('')
}
console.log(coin(1))
console.log(coin(2))
console.log(coin(3))