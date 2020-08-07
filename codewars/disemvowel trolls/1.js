function disemvowel(str) {
    return str.split('').filter((e) => !('aeiou').includes(e.toLowerCase())).join('');
}
console.log(disemvowel("This website is for losers LOL!"));