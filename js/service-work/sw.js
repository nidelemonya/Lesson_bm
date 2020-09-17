console.log(1)
// 请求 -> serviceworker -> 后端
// sw,js 监听 请求， 之前有没有请求过
// 如果请求过 直接取缓存
// 如果没有 我们帮浏览器 发出请求 得到内容 我给浏览器 同时
// 我再缓存一次
const CACHE_NAME = "App" + 1;

this.addEventListener('install', function (event) {
    event.waitUntil(
        // 打开 cache
        caches.open(CACHE_NAME).then((cache) => {
            // www.baidu.com/
            return cache.addAll([
                './', // 缓存首页的 html
                'js/boundle.js'
            ])
        })
    )
})