function longest(s1, s2) {
    // your code
    return (s1+s2).split('').sort().join('').replace(/(.).*\1/g,"$1") ;
}

console.log(longest("aretheyhere", "yestheyarehere"));