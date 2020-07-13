var countBits = function(n) {
    // Program Me
    return n.toString(2).split('').reduce((sum,e)=> {
        return sum + (+e);
        // return sum + Number(e);
    },0);
};

console.log(countBits(7));