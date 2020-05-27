const http = require('http');
class MyKoa {
    constructor(){
        this.fn= null;
    }
    // es6 写法 接收多个参数
    listen(...args){
        console.log(...args);
        let server = http.createServer(this.fn);
        server.listen(...args);
    }
    use(fn){
        this.fn = fn;
    }
}

module.exports = MyKoa;