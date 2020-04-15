// 优化
function f(n) {
    const w = new Map(); // es6 新的数据类型 map
    // 高层一样
    // if(n >= 40) throw new Error('内存溢出')
    if(n == 1) return 1;
    if(n == 2) return 2;
    if(w.has(n)){
        return w.get(n);
    }
    const ret = f(n-1) + f(n-2);
    // 存储结果下来
    w.set(n,ret);
    console.log(n) // 进行重复计算多次 越底层计算次数越多
    return ret;

}

console.log(f(6));