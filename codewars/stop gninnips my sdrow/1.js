function spinWords(str) {
    //TODO Have fun :)
    let arr = str.split(" ");
    let n = arr.length;
    while (n > 0) {
        if (arr[n - 1].length >= 5) {
            arr[n-1] = arr[n - 1].split("").reverse().join('');
        }
        n--;
    }
    return arr.join(' ');
}

console.log(spinWords("warriors"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("You are almost to the last test"));