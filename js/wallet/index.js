// js es6 class 关键字 面向对象
const UUID = require('uuid') // 引入第三方库,
class Wallet {
    // 属性和方法组成
    constructor(){ // 构造函数里声明属性
        // /-/g 作用是把所有的 - 替换为空
        this._id = UUID.v1().replace(/-/g,"");// 如何生成? V1 版本号 命名规则约定 _变量 私有
        // 创建时间 不能更改
        this._createTime = + new Date(); // 类型转换 加了+ 转换为时间戳 把时间转换为距离格林尼治时间的ms数
        // 余 额 如何设计?
        this._balance = 0; // 余额 设计成私有的属性 规则 安全
        this._modifyTime = new Date();
        // console.log(this.id);
        // console.log('欢迎使用支付宝钱包');
        // 设计支付宝用的钱包, 几十亿人都在用的
        // 数字货币 比特币
        // 1.钱包是唯一的 id, autoincremnet Node, 绝对不会重复
    }
    getId(){
        return this._id;
    }
    setId(){
        throw new Error('私有属性_id不能被修改');
    }
    getCreateTime(){
        return this._createTime;
    }
    getBalance(){
        return this._balance;
    }
    // 能这么写吗? 重置?
    // setBalance(){

    // }
    // increasedAmount 表明增加的量
    increaseBanlance(increasedAmount){ //
        console.log('多了' + increasedAmount);
        this._balance += increasedAmount;
        console.log('当前修改时间为' + this.setModifyTime());
    }
    decreaseBalance(decreasedAmount){
        console.log('少了' + decreasedAmount);
        this._balance -= decreasedAmount;
        console.log('当前修改时间为' + this.setModifyTime());
    }
    setModifyTime(){
        return this._modifyTime;
    }
}
const zzwWallet = new Wallet(); //实例化
console.log(zzwWallet.getId());
// console.log(zzwWallet.setId());
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBanlance(10.0);
console.log(zzwWallet.getBalance().toFixed(2));
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance().toFixed(2));
// zzwWallet.id = '12212'; // id 属性只读, 但不能修改
// console.log(zzwWallet.id); // id 是zzwWallet 的public 属性