var fs = require("fs");
// 执行前创建一个空的 ./test 目录 如果不为空 则会报错
console.log("准备删除目录 ./test");
fs.rmdir("./test",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取 ./test 目录");
   fs.readdir("./test/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});