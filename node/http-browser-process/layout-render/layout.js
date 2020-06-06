// 样式 格式化处理
// width: 200px -> 数字：200
function getStyle(element) {
    if (!element.style) {
        element.style = {};
    }else {
        return element.style;
    }
    for (let prop in element.computerStyle) {
        let value = element.computerStyle[prop]
        if (value.includes('px')){
            value = parseInt(value);
        }
        element.style[prop] = value;
    }
    return element.style;
}
function layout(element) {
    // 获取 computerStyle
    if(!element.computerStyle) return;
    let elementStyle = getStyle(element);
    if (elementStyle.display !== 'flex') return;
    if (elementStyle['justify-content'] !== 'center') return;
    // 主轴方向的剩余空间
    let mainSpace = elementStyle.width;
    for (let child of element.children){
        let childStyle = getStyle(child);
        mainSpace -= childStyle.width;
    }
    // 主轴绘制的起点
    let mainBase = mainSpace / 2;
    // 算出主轴全部元素的 x 坐标
    for (let child of element.children){
        // for of 是 es6 伟大发明，暂时理解 for of 用于数组
        let childStyle = getStyle(child);
        // 第一个元素的 x 坐标
        childStyle.x = mainBase;
        childStyle.y = 0;
        mainBase += childStyle.width;
    }
    // 交叉轴
    // ...
}

module.exports = layout;