const { SyncHook, AsyncSeriesHook } = require('tapable');
const hook = new SyncHook();
const asyncHook = new AsyncSeriesHook();
// on 发布
hook.tap('hook1', () => {
    console.log(1)
})
// emit 订阅
hook.call();
asyncHook.tapPromise('hook2', (resolve, reject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },3000)
    })
})

asyncHook.tapPromise('hook2', (resolve, reject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        },4000)
    })
})
asyncHook.tapAsync('XXXX',(cb) => {
    setTimeout(() => {
        cb()
    },3000)
})
// 异步串行
console.time('a')
asyncHook.promise().then(() => {
    console.timeEnd('a')
    console.log('async complete')
})
asyncHook.callAsync(() => {
    console.log('结束了')
})