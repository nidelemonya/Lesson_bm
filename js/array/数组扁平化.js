// Array.prototype.flat() 
let arr = ["a", ["b", "c"],
  ["d", ["e", ["f"]], "g"]
];
// console.log(arr.flat(1)); // 扁平化一层
// console.log(arr); // 此方法不会对原来数组造成影响
// console.log(arr.flat(Infinity));
// console.log(arr.flat(-2));
// console.log(arr.flat([4]));

// 实现
// 1. reduce 方法
// 1.1 一次性扁平化所有 reduce + ...

const flattenDeep = (arr) => {
  return Array.isArray(arr) ?
    arr.reduce((temp,cur) => {
      return [...temp,...flattenDeep(cur)]
    },[]) : [arr]
}

// 简化版 
const flattenDeep = (arr) => {
  return Array.isArray(arr) ?
    arr.reduce((temp,cur) => [...temp,...flattenDeep(cur)],[]) : [arr]
}

// 1.2 一次性扁平化所有 reduce + concat
// reduce + concat 不推荐，concat 可能会有性能问题
const flattenDeep = (arr) => {
  return Array.isArray(arr) ?
    arr.reduce((temp,cur) => temp.concat(flattenDeep(cur)),[]) : [arr]
}

// console.log(flattenDeep(arr));

// 1.3 实现 flat 方法
const flat = (arr, depth = 1) => {
  return depth > 0 ?
    arr.reduce((temp, cur) => {
      if (Array.isArray(cur)) {
        return [...temp, ...flat(cur, depth - 1)]
      }
      return [...temp, cur]
    }, []) : arr
}

// console.log(flat(arr));
// console.log(flat(arr, Infinity));

// 2. 栈
// 2.1 一次性扁平化所有
const flattenDeep = (arr) => {
  const result = [];
  const stack = [...arr]; // 拷贝数组
  while(stack.length !== 0) {
    const val = stack.pop();
    if(Array.isArray(val)) {
      stack.push(...val);
    } else{
      result.unshift(val)
    }
  }
  return result;
}

// console.log(flattenDeep(arr));