// 笔记草稿

// 题目
// 薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
// 1.输入字符包括，"(" , ")" 和 "<"和其他字符。
// 2.其他字符表示笔记内容。
// 3.()之间表示注释内容，任何字符都无效。 括号保证成对出现。
// 4."<"表示退格, 删去前面一个笔记内容字符。括号不受"<"影响 。

// 输入
// Corona(Trump)USA<<<Virus
// 输出
// CoronaVirus

const test = (str) => {
    let res = [];
    let start, end;
    let reg = /([a-z]|[A-Z])/;
    let strarr = str.split('')
    strarr.forEach((s,i) => {
        if (s === '(') {
             start = i
            return
        }
        if (s === ')') {
             end = i
            return 
        }
        if (reg.test(s)) res.push(s)
        if (s === '<') {
            res.pop()
        }
    });
    res.splice(start,end-start-1)
    return res.join('');
}

console.log(test("Corona(Trump)USA<<<Virus"))