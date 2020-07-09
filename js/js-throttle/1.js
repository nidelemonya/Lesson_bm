// 两种方式结合 头部事件和尾部事件都有 
function throttle(func, wait) {
    var previous = 0;
    var time = null;
    return function () {
        var now = new Date().getTime();
        // 0.2 - 0 当前时间距离上次时间的间隔
        // 修正了 timeout 的时间间隔
        const remain = wait - (now - previous);
        if (now - previous > wait) {
            func();
            previous = now;
        } else if (!time) {
            time = setTimeout(() => {
                func();
                time = null;
                // 时间戳, 只运用于头事件
                // 之后中间的 事件触发 (时间戳和 timeout是互竞的)
                // 为了不让时间戳触发事件 更新  previous
                previous = new Date().getTime();
            }, remain)
        }
    }
}