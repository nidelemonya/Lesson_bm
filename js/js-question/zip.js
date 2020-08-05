function zip(a, b, c) {
    // todo
    let res = [];
    for (let i = 0; i < arguments.length - 1; i++) {
        let arr = [];
        arr.push(a[i], b[i], c[i]);
        res.push(arr);
    }
    return res;
}

function zip1(...args) {
    let res = []
    let len = args.length
    for (let j = 0; j < arguments.length - 1; j++) {
        if (!res[j]) res[j] = []
        for (let i = 0; i < len; i++) {
            res[j].push(args[i][j])
        }
    }
    return res
}
console.log(zip1(['fred', 'barney'], [30, 40], [true, false]));
// => [['fred', 30, true], ['barney', 40, false]]