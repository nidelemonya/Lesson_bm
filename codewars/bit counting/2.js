var countBits = function(n) {
    // Program Me
    return n.toString(2).split('').filter(e => !(e === '0')).length;
};

console.log(countBits(17));