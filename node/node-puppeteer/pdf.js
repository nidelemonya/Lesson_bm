//  async await
const fs = require('fs');
const promise1 = new Promise((resolve, reject) => {
  // 回调
  fs.readFile('./package.json', (err, info) => {
    resolve(info);
  })
})
const promise2 = (info) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./p.json', info, (err) => {
      if (!err) {
        resolve();
      } else {
        reject();
      }
    })
  })
}
const promise3 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

// 写法上同步， 执行起来依然异步 （Pending， Fullfiled， Reject）
// then 链式调用  

promise1.then((info) => {
    // 返回promise
    return promise2(info);
  })
  .then(() => {
    // 等着 前面这个 promise
    // console.log('读写完成');
    return promise3(3000);
  })
  .then(() => {
    console.log('ok, .then');
  })

  async function run() {
    // async 是“异步”的简写，
    // 而 await 可以认为是 async wait 的简写。
    // 所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
    // await 接一个 promise 那么后面的代码就会等着， 等 promise resolve 才会执行
    // async + await 代替了 .then
    let info = await promise1; // promise1 info === resolve 了什么
    await promise2(info);
    await promise3(3000);
    console.log('ok, await');
    // ...code
  }
  run();

// 异步的顺序, 保证, 异步顺序怎么办?
// 1：原始写法： 回调函数嵌套在一起, 可能形成回调地狱.
fs.readFile('./package.json', (err, info) => {
  // 读完
  // 再写
  fs.writeFile('./p.json', info, (err) => {
    if (!err) {
      setTimeout(() => {
        console.log('ok, 嵌套');
        // 嵌套
      }, 3000)
    }
  })
})
// 回调 -> promise
// 以 then 这个api 保证了 异步任务的顺序
// xmlHttprequest -> axios

