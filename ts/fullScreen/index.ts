// TS: 内置 数据类型 + 外部类型
// boolen number string 首字母小写
// 数组:每一项类型都是一样的  元组

// js数组: let list = [1,2,3,4]
// ts数组: let list:number[] = [1,2,3,4]
// ts元组： let list:[string, number] = ['1',2];

// 枚举
enum Color { Red = 0, Green = 1, Blue = 2 }
let color: Color = Color.Red;    // 0
let colorName = Color[0];   // 'Red'
console.log(color, colorName);

// any
let a: any; // 不清楚类型; 用户输入

// void 空  用于标识方法返回值的类型，表示该方法没有返回值
function test(a: any): void {

}
// null, undefined
let b: null = null;

// never never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
function test1(): never {
    // while(true){

    // }
    throw new Error('error');
}
// object

// 联合类型
// 自定义一个类型: 进入全屏的时候 调用其中之一

type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' | 'msRequestFullscreen'

interface HTMLElement {
    requestFullscreen(): any,
    webkitRequestFullScreen(): any,
    mozRequestFullScreen(): any,
    msRequestFullscreen(): any;
}
// 变量
let RFS_METHOD: RFSmethods
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if ('webkitRequestFullScreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullScreen';
}
else if ('mozRequestFullScreen' in document.body) {
    RFS_METHOD = 'mozRequestFullScreen';
}
else if ('msRequestFullscreen' in document.body) {
    RFS_METHOD = 'msRequestFullscreen';
}
function beFull(el: HTMLElement) {
    // 检查兼容性
    // RFSmethods 4个中的 1个
    // el.requestFullscreen();
    el[RFS_METHOD]();
}
// ts 结合 原生 html dom
// ts 结合 Node
// ts 结合 React
// dom 节点
// 节点类型 TS 没有内置, 在lib里面添加
const btn = document.querySelector('#btn');   //# id 选择器
const box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        if (box instanceof HTMLElement) { // 如果 box 属于  Element 类型
            beFull(box);
        }
    })
}