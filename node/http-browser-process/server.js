const http = require('http');
http.createServer((req,res)=>{
    res.end('就这?');
})
.listen(8088,()=>{
    console.log(8088);
})