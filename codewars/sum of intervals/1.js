function sumIntervals(intervals) {
    //TODO
    // 排序
    intervals.sort((a, b) => (a[0] - b[0]))
    // console.log(intervals)
    let max = intervals[0][1]
    return intervals.reduce((sum, e, i, intervals) => {
        if (i >= 1) {
            if (e[0] < max) e[0] = max
            if (e[1] > max) max = e[1]
        }
        // 8 + 2 + 3 +1
        if (e[1] < e[0]) return sum = sum
        return sum = sum + (e[1] - e[0])
    }, 0)
}
// console.log(sumIntervals([[1,4],[7, 10],[3, 5]]))
// console.log(sumIntervals([[1,2],[6, 10],[11, 15]]))
console.log(sumIntervals([[1, 9], [18, 20], [1, 6], [16, 19], [8, 11]]))