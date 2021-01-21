const arr = [1, 2, 2, 3, 3, 4, 4, 5, 6];
const arr1 = [{
  a: 1
}, {
  a: 1
}, {
  'a': 1
}, {
  'a': 1
}];
// console.log(new Set(arr1)); // 可以看到 对象数组不能直接去重 我们需要采用间接的方法去重
// 间接使用 Set 去重需要一个 唯一索引(比如id) 进行区分
const arr3 = [{
    id: 1,
    name: '111'
  },
  {
    id: 1,
    name: '111'
  },
  {
    id: 2,
    name: '222'
  },
  {
    id: 2,
    name: '666'
  },
  {
    id: 3,
    name: '333'
  },
  {
    name: '444'
  },
  {
    id: 4,
    name: '444'
  },
  {
    id: 5,
    name: '555'
  }
];

// 拓展 Map 对象和 Set 对象
// 借助 Map 对象特性

// const duplicateRemove = (arr) => {
//   const res = new Map(arr);
//   // return res; // Map(1) { undefined => undefined }
//   return arr.filter((item) => !res.has(item.id) && res.set(item.id))
//   // 去除掉 没有id 以及 id 重复的 对象
// }

// console.log(duplicateRemove(arr3));

// 数组去重
// 1. 使用 Set
// const unique = (arr) => {
//   return Array.from(new Set(arr));
// }

// 2. 使用 reduce
// const unique = (arr) => {
//   return arr.reduce((temp, cur, i)=>{
//     if(arr.indexOf(cur) === i){
//       return [...temp, cur]
//     }
//     return temp;
//   },[])
// }

// 3. 使用 filter
// const unique = (arr) => {
//   return arr.filter((cur, i, array) => array.indexOf(cur) === i)
// //   return arr.filter((cur, i) => arr.indexOf(cur) === i)
// }

// 4. 使用双重for循环
// const unique = (arr) => {
//   const result = [];
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] === arr[j]) {
//         // 如果前后两个值一样，i+1 进位跳过
//         i++;
//         j = i;
//       }
//     }
//     result.push(arr[i]);
//   }
//   return result;
// }

// console.log(unique(arr));