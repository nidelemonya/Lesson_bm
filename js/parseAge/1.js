function parseAge (age) {
    if (typeof age !=='string' ||  age.split("").filter((e)=> e.match(/^[a-zA-Z]$/)).toString() || age.length === 0) throw new Error("请传递一个纯数字字符串");
    return parseInt(age, 10);
}

console.log(parseAge ("2314"));
// console.log(parseAge ("a314"));
// console.log(parseAge ([1,2,3,4]));
// console.log(parseAge (""));
let a = "a123b4";
let b = "1234";
console.log(b.split("").filter((e)=> e.match(/^[a-zA-Z]$/)).toString());