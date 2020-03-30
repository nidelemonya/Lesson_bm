//发红包的功能
function hongbao(total,num){
    let arr =[];//声明数组
    let restAmount = total;//发到最后那个人的时候，拿剩下的钱
    let restNum=num;
    for(let i=0;i<num-1;i++){ // <是下标从0开始 然后循环39个人，最后一个人不用循环所以是<num-1
        //随机算法 公平 多一些，少一些
        let amount =total / num;
        arr.push(amount);
        restAmount-=amount;

    }
    arr.push(restAmount);//拿最后的一份钱，加起来是所有的钱
    //1.钱数要对得上
    //2.好玩，随机 平均数 total/num
    //0.125
    //0.125
    //...
    //抢？
    return arr;
}

function hongbao_random(total,num){
    let arr =[];//声明数组
    let restAmount = total;//总钱数
    let restNum=num;//总份数
    for (let i=0;i<num-1;i++){
        let amount=Math.round(Math.random()*(total/restNum*2*100-0.01+1)+0.01)/100;
        arr.push(amount);
        restAmount -=amount;
    }
    arr.push(restAmount);
    return arr;
}
//console.log(hongbao(5,40));
console.log(hongbao_random(5,40));