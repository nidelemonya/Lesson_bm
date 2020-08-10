const test = (str) => {
    let res = [];
    let reg = /\([a-zA-Z]*\)/g
    // 替换掉 括号里面的内容
    str =  str.replace(reg,'')
    for (let item of str) {
        if(item === '(' || item ===')') continue
        else if (item === '<') res.pop()
        else res.push(item)
    }
    return res.join('');
}

console.log(test("Corona(Trump)USA<<<Virus"))