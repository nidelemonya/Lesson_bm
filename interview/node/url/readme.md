1. queryString 常考题
    前端后端都能解决，前端入手为主
    - 后端解决， 引入 node 的 url 模块 使用 url.parse() 方法
    - split 字符串切割方法
    - 改善 应用场景
    http://baidu.com:8080/test/h?query=js&a=1#node
    解析成查询对象 {query:js, a:1}

    当前的 url 需要解析出来查询对象， 作为 ajax(axios) 查询
