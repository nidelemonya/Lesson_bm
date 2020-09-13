FIFE 立即执行函数


loader是webpack的核心概念之一，它的基本工作流是将一个文件以字符串的形式读入，对其进行语法分析及转换（或者直接在loader中引入现成的编译工具，例如sass-loader中就引入了node-sass将SCSS代码转换为CSS代码，再交由css-loader处理），然后交由下一环节进行处理。
命令 npx webpack --mode development