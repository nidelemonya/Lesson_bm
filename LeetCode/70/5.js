function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    // 重复计算的 时间和内存就会更好
    // 变量可以, 
    let ret = 0,
        pre = 2, // 前一个是2 重复使用这个空间
        prepre = 1;
    // 递归可以优化成循环
    for (let i = 3; i<=n; i++){
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }
    return ret;
}

console.log(f(100));