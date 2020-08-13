/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')

    let len = Math.max(v1.length,v2.length);
    for (let i=0;i<len ;i++) {
        // 不用判断谁长 谁短
        let a = +(v1[i] ? v1[i] : '0')
        let b = +(v2[i] ? v2[i] : '0')
        if (a>b) return 1
        if (a<b) return -1
    }
    return 0
};

console.log(compareVersion('7.5.2.4','7.5.3'))
console.log(compareVersion('1.0.1','1'))