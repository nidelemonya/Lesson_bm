- ES5声明变量只有两种方式：var和function。
- ES6有let、const、import、class再加上ES5的var、function共有六种声明变量的方式。
- 还需要了解顶层对象：浏览器环境中顶层对象是window，Node中是global对象。
- ES5中，顶层对象的属性等价于全局变量。(敲黑板了啊)
- ES6中，有所改变：var、function声明的全局变量，依然是顶层对象的属性；let、const、class声明的全局变量不属于顶层对象的属性，也就是说ES6开始，全局变量和顶层对象的属性开始分离、脱钩。

-  window.navigator.userAgent 用户代理
1. 包含浏览器的信息
- pc, 移动端
- 为什么有 chrome userAgent Mozilla Safari 这些东西?
    扎实的基础能力(leetcode, 读书) + 业务经验

- 浏览器的历史
    - js 为什么是当下最值得投资的语言
    - 1989 伯纳斯 李 万维网 HTTP 0.9
    - 1990 Nexus 发布了第一款浏览器 不支持图片 css img js
    - 1993 NSCA 看到图片 Mosaic 马赛克 HTTP 1.0 支持 不同类型的文件
        - 不支持 iframe
    - 1994 商业浏览器 Netscape Mozilla 十天 JavaScript(布兰登 艾奇)
        - 支持   iframe
        - 网管, 运维人员 根据 userAgent 去判断 用户用的是什么浏览器 然后返回是否有iframe 的内容
    - 1995 IE win95
        - ie 增加了 Mozilla 头
    - 2002 Mozilla console 面板 受到了 前端开发者的喜爱
    - 2008 chrome V8 引擎发布 js 编译执行 提升10倍效率 多进程架构
    - 2009 node.js 横空出世 Ryan Dahl 基于V8引擎  js 离开浏览器单独编译并运行 
        - 非阻塞IO, 高性能, 高并发 省机器 js php java Python
    - 2011 英特尔 王文睿 node-webkit
    - 2012 RN App
    - 2013 electron 桌面exe 应用
        -  electron = chromium (开源版本) + node + 系统的 API
        - 快速, 可以替代c# java 一份代码, 在windows, mac, linux 都可以安装 
        - 底层由 html css js 实现
