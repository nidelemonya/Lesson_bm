/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    let friend = []
    let N = M.length,
        res = N
    for (let i in M) {
        friend[i] = i
    }
    function union(s,d) {
        for (let i in friend) {
            if (friend[i] === s) {
                friend [i] = d
            }
        }
    }
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (M[i][j] === 1) {
                if (friend[i] !== friend[j]) {
                    res--
                    // console.log(friend[i],friend[j])
                    union(friend[i],friend[j])
                    // console.log(friend[i],friend[j])
                }
            }
        }
    }
    return res
};

// console.log(findCircleNum([[1, 1, 0],[1, 1, 0],[0, 0, 1]]))
// console.log(findCircleNum([[1, 1, 1],[1, 1, 1],[1, 1, 1]]))
console.log(findCircleNum([[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]]))