// 写一个日期格式化函数

const dateFormat = (dateInput, format)=>{
  // todo
  // 不够 0 进行 补 0 操作
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  };
  return format.replace(/yyyy|MM|dd/g, function (e) {
    switch (e) {
        case 'yyyy':
            return tf(dateInput.getFullYear());
        case 'MM':
            return tf(dateInput.getMonth() + 1);
        case 'dd':
            return tf(dateInput.getDate());
    }
})
}

// 输入：

dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日

console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd'))
console.log(dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日'))