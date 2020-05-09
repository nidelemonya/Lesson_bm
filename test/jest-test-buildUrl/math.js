function add(a,b){
    return a + b;
}
function minus(a,b){
    return a - b;
}
function encode(str) {
    // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
    return encodeURIComponent(str).
    // 这里是axios 觉得这些字符使用是安全的，所以转回来。
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '['). // 数组 合法
    replace(/%5D/gi, ']');
}

function buildUrl(url, params) {
    let parts = [];
    // 获取对象所有的key value 统一变成一个格式
    Object.keys(params).forEach(key => {
        let value = params[key];
        if (value === null || typeof value === 'undefined') {
            return;
        }
        if (Array.isArray(value)) {
            key += '[]';
            // c:[1,2,3] => c[]=1&c[]=2&c[]=3   是不是要循环一下 value
        } else {
            // c：123
            // key = c
            value = [value];
        }
        value.forEach(val => {
            // console.log(key);
            // console.log(val);
            let part = `${encode(key)}=${encode(val)}`
            // 1. keywords='海阔天空' type='all' query='js'
            // 2. & join
            parts.push(part);
        })
    })
    // 
    const hashIndex = url.indexOf('#');
    // 如果存在 返回 # 所在的位置 不在 返回-1   返回数值型 number
    if (hashIndex != -1) {
        // 找到 # 位置 从 0~ # 截取下来
        url = url.slice(0, hashIndex);
    }
    // 三元运算符
    url += (url.indexOf('?') === -1 ? '?' : '&') + parts.join('&');
    return url;
}
function flat(arr) {
    let res = [];
    for (let el of arr) {
      if (Array.isArray(el)) {
        res = res.concat(flat(el));
      }
      else {
        res = res.concat(el);
      }
    }
    return res;
  }
// 定义一个自己的模块
// 导出去
module.exports ={
    add,
    minus,
    buildUrl,
    flat
}
// 或者
// exports ={
//     add,
//     minus
// }