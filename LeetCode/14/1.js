/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();
    let min = strs[0];
    let max = strs[strs.length - 1];
    let res = "";
    let arr = [];
    if (strs.length != 1 && strs.length != 0 ){
        for (let i = 0; i < 2; i++) {
            if(strs[i] ==""){
                arr[0]= strs[i];
            }
            for (let j = 0; j < min.length; j++) {
                if (min[j] === max[j]) {
                    res = min;
                } else {
                    res = min.slice(0, j);
                }
                arr.push(res);
                arr.sort();
            }
        }
    } 
    else {
        arr[0]=strs.join('');
    }
    // console.log(res);
    console.log(arr[0]);
    // console.log(min);
    // console.log(max);
    return arr[0];
};


// longestCommonPrefix(["abb", "aba", "abac"]);
// longestCommonPrefix(["flower", "flow", "flight"]);
// longestCommonPrefix(["cax", "cacecar", "cab", "cab"]);
// longestCommonPrefix([""]);
// longestCommonPrefix(["ca", "ca", "ca"]);
// longestCommonPrefix(["cas", "ca", "cax"]);
// longestCommonPrefix(["a", "a", "a"]);