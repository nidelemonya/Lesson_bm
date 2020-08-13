const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;

myEmitter.once('price', () => {
    console.log('价格变了')
})
myEmitter.once('price', () => {
    console.log('价格变了')
})
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
myEmitter.emit('price');
// 打印: 1
myEmitter.emit('event');
