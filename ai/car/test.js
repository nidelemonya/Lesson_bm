const fs = require('fs');
const path = require('path');

console.log(fs.readdirSync(path.join(
    process.cwd(),'src'))); // 项目的根目录物理路径