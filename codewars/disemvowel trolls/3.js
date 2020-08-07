function disemvowel(str) {
    // replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
    return str.replace(/[aeiou]/gi,'');
} 
console.log(disemvowel("This website is for losers LOL!"));    