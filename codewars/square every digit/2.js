function squareDigits(num){
    return parseInt([...`${num}`].map(el => parseInt(el)).reduce((sum,e)=>{
        return sum + Math.pow(e,2).toString()
    },0))
    //may the code be with you
}
console.log(squareDigits(9119));