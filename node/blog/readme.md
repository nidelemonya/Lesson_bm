- 博客网站, 还欠缺什么技能？
    React 做 UI 组件化思维
    - 列表
    - 详情页
    - 评论
    node 做后端, 后台数据库？ mysql？mongodb
    怎么向我们的应用提供数据？
    - 爬取 cherrio
    - MVC Model(Mysql)-View(React)-Controller(Node)
    可以实现增删改查 但不像启用mysql 这么繁琐?
    - 简单服务的话, json 文件作为资源, 代替数据库
    使用json-server 来启动它 restful api 格式
    /posts post {id:,title:,content:} 

    问题: /posts/show/1 看某篇文章的URL 存在什么问题？
    复杂， 不能有动词 /posts/1 show的概念由谁表达?
    /   GET 动词 这里只是获取, 所以应该用GET
    / posts POST
JSON 是数据格式
    设计一个 URL
    汇款需求, 从账户1向账户2汇款500元,如何设计?
    /accounts/:1/transfer/:500/to/:2
    restfule 动词 + url(动词)
    资源
    /transaction 转账 POST
    {from:1, to:2, amount:500.00}
    Restful 是后端在设计URL 的 国际规范
    REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful


- 安装 json-server 
    - yarn add json-server

