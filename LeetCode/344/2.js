/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    return myreverse(s);
};
function myreverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left ++;
        right --;
    }
    return arr;
}

console.log(reverseString(["h","e","l","l","o"]));