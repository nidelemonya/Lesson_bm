// 理解状态机的概念
// a 'i am good'
function match(str){
    for (let char of str){
        if (char ==='a'){
            return true;
        }
    }
    return false
}
// am 'i am good'
function match1(str){
    // 引入一个状态变量 foundA
    let foundA = false;
    for (let char of str){
        if (char ==='a'){
            foundA = true;
        }
        // 建立状态改变的条件
        // 满足 char ==='m' 去到下一个状态
        else if (foundA && char ==='m'){
            return true;
        }
        // 不满足 回到原状态
        else {
            foundA = false;
        }
    }
    return false;
}
// console.log('example1',match1('i am good'));
// console.log('example2',match1('i axm good'));
// console.log('example3',match1('i ab good'));
// am 'i abc good'
function match2(str){
    // 引入一个状态变量 foundA
    let foundA = false, foundB = false;
    for (let char of str){
        if (char ==='a'){
            foundA = true;
        }
        // 建立状态改变的条件
        // 满足 char ==='m' 去到下一个状态
        else if (foundA && char ==='b'){
            foundB = true;
        }
        else if (foundB && char ==='c'){
            return true;
        }
        // 不满足 变回初始状态
        else {
            foundA = false;
            foundB = false;
        }
    }
    return false;
}
console.log('example1',match2('i am good'));
console.log('example2',match2('i abxcm good'));
console.log('example3',match2('i abc good'));