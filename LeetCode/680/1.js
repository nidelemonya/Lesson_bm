/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    if (s.length % 2 === 0) {
        console.log('偶数');
    } else {
        console.log('奇数');
        let arr = [...s];
        let len = s.length;
        let index = Math.floor(len / 2);         // 得到中间数的下标
        for (let i = 0; i < index; i++) {
            if (arr[i] === arr[len - i]) {
                console.log('是回文字符串');
            } else {
                console.log('不是回文字符串')
            }
        }
        console.log(index);
    }
};
// validPalindrome('asd');
// validPalindrome('asa');
validPalindrome('dasad');
// validPalindrome('sssd');
// validPalindrome('sssds');