// 递归：缓存
// 前提(纯函数)：输入相同 输出也相同
// f(x)=x+10
// f(10) = 20 // 10 -》计算出来一个结果20, 缓存一下 { 10 : 20}
// f(10) = 20 // 10 -》没有必要计算了,从缓存里面取出来。
// f(10) = 20 // 10 -》没有必要计算了,从缓存里面取出来。

function _add10() {
    return x + 10;
}
let cache1 = {};
function add10(x) {
    if (cache1[x] !== undefined) {
        console.log('取出缓存');
        return cache1[x];
    }
    let res = x + 10;
    // k -> v
    console.log('经过计算了')
    cache1[x] = res;
    return res;
}
console.log(add10(10));
console.log(add10(10));
console.log(add10(10));
console.log(cache1);



//多个函数都要缓存呢?
let cache2 = {};
function buildurl(url, obj) {
    let k = url + JSON.stringify(obj);
    if (cache2[k] !== undefined) {
    console.log(1);
    return cache2 [k] ;
    }
    let parts = [];
    for (let key of Object.keys(obj)) {
    parts.push(`${key}=${obj [key]}`)
}
    let res =`${url}?${parts. join('&')}`
    cache2[k] = res;
    console.log(2);
    return res;
}
console.log(buildurl('api.com',{a: 1, b: 2}));
console.log(buildurl('api.com',{a: 1, b: 2}));
console.log(buildurl('api.com',{a: 1, b: 2, C: 3}));

// 雷同 封装
// 1. 不同 通过参数传进来，功能不一样， 在js 里面实现某个功 放到函数里面实现的。
// 2. 公用 内部: 缓存
// 2.公用内部:缓存(2.1 let cache; 2.2 if() {}  2.3 cache[] = res )
// 过程:上面提到的2.1 2.2 2.3者三个步骤，完成缓存的一个过程
// 所以 封装 2.1 2.2 2.3 -> 函数式： 过程抽象


// 输入是一个函数
function memorize(func) {
    let cache = {};
    return function(...args) {
        let k = JSON.stringify(args);
        if (cache[k] !== undefined) {
            return cache[k];
        }
    // 计算
    let res = func(...args);   // 函数调用需要参数，
    cache[k] = res;
    return res;
    }
}
// 输出也是一个函数
let memo_add10 = memorize(_add10)        //之前: true [] {} string 现在:函数 _add10(20)
// memo_add10 变成了 具有缓存功能的函数
memo_add10(10);
memorize(-buildurl)     //_buildurl('api. com', {a: 1, b: 2}} 