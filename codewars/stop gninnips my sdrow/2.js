function spinWords(str) {
    //TODO Have fun :)
    return str.split(" ").map((e) =>{
        if(e.length >= 5){
            // console.log(e)
            return e.split("").reverse().join('');
        }
        return e;
    }).join(' ');
}

// console.log(spinWords("wstrarriors"));
// console.log(spinWords("Hey fellow wstrarriors"));
// console.log(spinWords("You are almost to the last test"));