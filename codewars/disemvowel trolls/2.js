function disemvowel(str) {
    // match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    return str.split('').filter(e=> !e.match(/[aeiou]/i)).join('')
}
console.log(disemvowel("This website is for losers LOL!"));