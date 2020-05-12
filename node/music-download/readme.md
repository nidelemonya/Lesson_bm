## step
1. 传入关键词 node index.js keywords, 拿到keywords
    node 启动一个文件 启动进程()
    keywords 传给我们进程的 keywords 信息直接从 process 上面取到
2. 搜索 发个请求
    browser： ajax - js原生的api: fetch XmlhttpRequest
    node: 爬虫 流 - node 原生的 api http.get
    封装好库: axios request
    - npm i axios -S 
    - npm i axios--save 把当前依赖当做 dependencies
3. 展示 支持键盘上下键
4. 回车下载 下载的是歌的内容 要拿到歌的url 已经拿到了id 通过id 获取歌的 url 进行下载


## npm 
- -S  --save     把当前依赖当做 dependencies
- -D  --save-dev 把当前依赖当做 dev-dependencies