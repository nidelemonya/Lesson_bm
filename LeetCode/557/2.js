/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reduce((sum, e)=> (sum + ' '+e.split('').reverse().join('')
    ),'').split(' ').filter(e=>(e.length!==0)).join(' ')
};
console.log(reverseWords("Let's take LeetCode contest"))