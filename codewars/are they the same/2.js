function comp(array1, array2){
    //your code here
    if (array1 === [] || array2 === [] || array1 === null || array2 === null) return false
    return array1.sort((a,b)=> a-b).map(m=>m*m).join() ===  array2.sort((a,b)=> a-b).join()
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]))
console.log(comp([17, 96, 66, 91, 5, 3], [290, 9216, 4356, 8281, 25, 9]))
console.log(comp([3,2,2], [9,9,4]))
console.log(comp([3,4], [0,25]))