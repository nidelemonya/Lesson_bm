// # id 选择器 . 类选择器
const pageOne = document.querySelector('#page-one');
const pageTwo = document.querySelector('#page-two');
const startBtn = document.querySelector('#page-one button');
startBtn.addEventListener('click', function () {
    document.body.removeChild(pageOne);
    init();
})
let step = 1;
// 2 2 x 2 50%
// 3 3 x 3 100 / 3
// 4 4 x 4 100 / 4
function init() {
    step++;
    // 结构 []
    let [normalColor, specialColor] = getColor(step); // 相当于[#eeeeee ,#666666]
    // 哪个位置 normalColor ? specialColor ? 随机数!!!
    // Math.random() 生成 0到1 之间的随机数
    // 0 ~ 1
    // step = 2: 0 * 4 ~ 1* 4 => 0 ~ (step * step)
    // Math.floor() 向下取整
    let pos = Math.floor(Math.random() * (step * step));
    let blockWidth = 100 / step;
    let arr = [];
    // i: 取值 0 ~ step * step
    for (let i = 0; i < step * step; i++) {
        // 模板字符串``
        let item = `
        <div class="block" style="width: ${blockWidth}%; height: 100px">
        <div 
            style="background-color: #${i === pos ? specialColor : normalColor}"></div>
        </div>
        `
        arr.push(item);
    }
    // .innerHTML = `<div class="block"></div> <div class="block"></div> `
    // arr.join() 转换为字符串, '' 代表: 用 '' 把数组的每一项拼接起来 这里因为是空的 所以是每一项都连起来了
    pageTwo.innerHTML = arr.join('');
    const allBlock = document.querySelectorAll('.block');
    // allBlock 就是 个数组 [pos] 就是取第 pos 项的值 点到了pos 这项 执行 init() 函数
    allBlock[pos].addEventListener('click', function () {
        init();
    })
}

/**
  * 根据关卡等级返回相应的一般颜色和特殊颜色
  * @param {number} step 关卡
  */
function getColor(step) {
    let random = Math.floor(100 / step);
    // let random = Math.floor(Math.abs(100 - 4 * step));
    let color = randomColor(17, 255),
        m = color.match(/[\da-z]{2}/g);
    console.log("m", m);
    console.log(typeof m[0]);
    console.log("color", color);
    for (let i = 0; i < m.length; i++) m[i] = parseInt(m[i], 16); //rgb
    let specialColor =
        getRandomColorNumber(m[0], random) +
        getRandomColorNumber(m[1], random) +
        getRandomColorNumber(m[2], random);
    return [color, specialColor];
}


function getRandomColorNumber(num, random) {
    let temp = Math.floor(num + (Math.random() < 0.5 ? -1 : 1) * random);
    if (temp > 255) {
        return "ff";
    } else if (temp > 16) {
        return temp.toString(16);
    } else if (temp > 0) {
        return "0" + temp.toString(16);
    } else {
        return "00";
    }
}
// 随机颜色 min 大于16
function randomColor(min, max) {
    var r = randomNum(min, max).toString(16);
    var g = randomNum(min, max).toString(16);
    var b = randomNum(min, max).toString(16);
    return r + g + b;
}
// 随机数
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}