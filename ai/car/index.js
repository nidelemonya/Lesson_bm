var fs = require('fs'); // node file sytem node 自己的模块
var path = require('path'); // 路径模块
// uuid npm 第三方库
// fs.readFile('textdd.txt',function(err,data){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

// 第一个小问题
// function getDirFiles(starPath) {
//     // 子目录, 孙目录 递归目录
//     // 递归
//     // 1.一个大问题 分解成很多个相同的小问题
//     // 2.退出条件 目录下没有子目录了
//     let result = [];
//     // process node  全局变量 进程 .cwd 获取当前进程的目录
//     // console.log(path.join(process.cwd(),starPath));
//     // 1.读取所有文件
//     let files = fs.readdirSync(
//         path.join(process.cwd(), starPath)); // 同步读取一个目录
//         // console.log(files);
//         for (let file of files){
//             // console.log(file);
//             let stats = fs.statSync(path.join(process.cwd(),starPath,file));
//             if(stats.isFile(file)){
//                 result.push(file);
//             }
//             if(stats.isDirectory()){
                
//             }
//             // console.log(stats);
//         }
//         return result;
// }
function getDirFiles(starPath) {
    let result = [];
    // 递归
    function finder(parentPath){
        // console.log(path);
        let files = fs.readdirSync(parentPath);
        if(!files.length) return;
        // console.log(files);
        files.forEach(function(val,index){
            // console.log(val,index);
            // 目录还是文件
            let fPath = path.join(parentPath,val);
            // console.log(fPath);
            let stats = fs.statSync(fPath);
            if(stats.isDirectory()){
                finder(fPath);
            }
            if(stats.isFile()){
                result.push(fPath);
            }
        })
    }
    finder(
        path.join(process.cwd(), starPath)
    );
        return result;
}
console.log(getDirFiles('src'));