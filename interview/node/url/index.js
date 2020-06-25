// const url = require('url'); node url 模块 内置 commonjs
const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node" // url 字符串

// queryString 有什么方法获得？
// 1. split
// 2. 正则表达式

// var res = url.parse(urlString);
// console.log(res);
// console.log(res.query);

// function getQueryString(urlStr) {
//     var obj = new Object();
//     if (urlStr.indexOf("?") != -1) { // 查询参数部分
//         var str = urlStr.split('?');
//         if (str[1].indexOf('#') !=-1) {
//             var queryStr = str[1].split('#')[0]
//         }
//         console.log(str);
//         console.log(queryStr);
//         var strs = queryStr.split('&');
//         console.log(strs);
//         for (let i =0;i< strs.length; i++){
//             obj[strs[i].split('=')[0]] = strs[i].split('=')[1]
//         }
//     }
//     return obj;
// }

// console.log(getQueryString(urlString));


function getQueryString(urlStr) { // 查询对象
    var obj = new Object();
    if (urlStr.indexOf("?") != -1) { // 查询参数部分
      var queryStr = urlString.split('?')[1];
      if (urlStr.indexOf("#") != -1) {
        // 前端如果也有node 那样的url 模块就好了， 
        queryStr = queryStr.split('#')[0];
      }
      // console.log(queryStr);
      var strs = queryStr.split("&");
      // console.log(strs);
      for (var i = 0; i < strs.length; i++) {
        obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }
    return obj;
  }

console.log(getQueryString(urlString));