const path = require('path')
module.exports = {
    module: {
        rules: [
            {
                test: /.css$/i,
                use: path.resolve(__dirname, './css-loader.js') // 拼接为绝对路径
            }
        ]
    }
}