// split 方法:将一个字符串分割为子字符串,然后将结果作为字符串数组返回
function alphabetPosition(text) {
    return text.split("").filter((e) => {
        // console.log(e);
         return  e.toUpperCase() !== e.toLowerCase();
    }).map(m => m.toLowerCase().charCodeAt(0) - 96).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));