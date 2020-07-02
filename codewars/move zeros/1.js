function move_zeros(arrNum, isRight) {
    let hasisRight = isRight !== undefined;
    isRight = hasisRight ? isRight : true;
    // console.log(isRight);
    let i = arrNum.length - 1;
    while (i >= 0) {
        if (arrNum[i] === 0) {
            if (isRight) {
                arrNum.splice(i, 1);
                arrNum.push(0);
            } else {
                arrNum.splice(i, 1);
                arrNum.unshift(0);
                // arrNum.splice(0,0,0);
            }
        }
        i--;
    }
    return arrNum;
    // console.log(nums);
    //Your Code logic should written here
}
console.log(move_zeros([1, 0, 3, 4, 0, 5], false));