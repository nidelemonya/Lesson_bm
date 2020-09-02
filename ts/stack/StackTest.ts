import Stack from './lib/stack';

const stack = new Stack();
stack.push('第一条数据')
stack.push('第二条数据')

console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.toString())
stack.clear()
