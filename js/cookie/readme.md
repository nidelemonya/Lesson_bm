## cookie
### 写入cookie 
```js
docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
```
- name 要创建或覆盖的cookie的名字
- value cookie的值
- Domain: cookie 生效的域名 baidu.com name.baidu.com (cookie 也存在跨域问题)
如果没有定义，默认为当前文档位置的路径的域名部分
- path: /a/b /c 指生效的路径
- expires: 过期时间 默认就是当前 session 失效
- httpOnly: cookie 只在 http 传输， js无法操作的(cookie 可以有后端的 set-cookie 相应头设置， 也可以有前端 js document.cookie = '' 设置)
- secure: 只在 https 的环境下面生效

cookie 只要符合 domain + path 的生效范围 就会随着 http 请求发送
- sameSite: lax strict(cookie 只在同域生效) none
 用于防止 CSRF(跨站请求伪造) 攻击
