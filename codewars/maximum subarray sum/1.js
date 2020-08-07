var maxSequence = function(arr){
    sum = 0,
    index = 0, k = 0
    arr.forEach((e,i) => {
        if(sum > 0) {
            sum += e
            k = i - 1
        } else {
            sum = e
            index = i
        }
    })
    return arr.slice(index, k)
}
console.log(maxSequence([3, 1, -3, 4, -1, 2, 1, -5, 4]))