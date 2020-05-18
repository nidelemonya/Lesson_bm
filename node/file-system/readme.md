# Node.js 文件系统

- 导入文件系统模块
```js
var fs =require('fs');
```
## 异步
- fs.readFile()
## 同步
- fs.readFileSync()。

### 建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。

## 打开文件
```js
fs.open(path, flags[, mode], callback)
```
path - 文件的路径。
flags - 文件打开的行为。具体值详见下文。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。(异步模式)

## 获取文件信息
```js
fs.stat(path, callback)
```
- 异步模式

## 写入文件
```js
fs.writeFile(file, data[, options], callback)
```
- writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。(异步模式)

## 读取文件
```js
fs.read(fd, buffer, offset, length, position, callback)
```
- 该方法使用了文件描述符来读取文件(异步模式)。

## 关闭文件
```js
fs.close(fd, callback)
```
- 该方法使用了文件描述符来读取文件(异步模式)。

## 截取文件
```js
fs.ftruncate(fd, len, callback)
```
- 该方法使用了文件描述符来读取文件(异步模式)。

## 删除文件
```js
fs.unlink(path, callback)
```

## 创建目录
```js
fs.mkdir(path[, options], callback)
```
## 读取目录
```js
fs.readdir(path, callback)
```

## 删除目录
```js
fs.rmdir(path, callback)
```
