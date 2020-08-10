/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let res = [];
    path = path.split('/');
    for (let item of path) {
        // continue 跳出本次循环 继续下一次循环
        if (item === '' || item === '.') continue
        else if(item === '..') res.pop()
        else res.push(item)
    }
    return '/' + res.join('/')
};


// let reg = /[a-zA-Z]/;
// 使用 reg.test
// console.log(reg.test('/'))


console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath("/a//b////c/d//././/.."))
console.log(simplifyPath("/a/../../b/../c//.//"))