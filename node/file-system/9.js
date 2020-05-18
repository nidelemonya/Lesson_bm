var fs = require("fs");
console.log("创建目录 /test/");
fs.mkdir("./test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});