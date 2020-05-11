const fs = require('fs');

fs.readFile('./readme.md',(err,data)=>{ // node 异步的无阻塞
    // 异步的
    if(err){
        console.log('error');
    }
    else{
        console.log(data);
        // console.log(data.toString());
    }
})

console.log('123');