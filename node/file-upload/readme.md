## Content-Type: text/plain
提交给后端的数据 就是纯文本
```js
name = 123
file = 1908342.jpg   // 文件名 没有文件内容
```
## Content-Type:application/x-www-form-urlencoded
```js
name=123&file=1908342.jpg 
```

## Content-Type:multipart/form-data
```js
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt"\r\n
Content-Type: text/plain\r\n
\r\n
123456789\r\n   // 文件内容

-----------------------------205579936434786223734260171678--
```
前面两种编码对于二进制文件或者一些非 ASCII 字符 处理起来是很低效的


后端处理文件上传:
- 分隔符分隔
- 得到分隔之后的每一块，文件内容， fs.write() 保存文件, 
- 完成