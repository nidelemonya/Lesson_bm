// alloyFinger https://github.com/AlloyTeam/AlloyFinger
// hammer.js http://hammerjs.github.io/

// window.addEventListener('contextmenu',e=> e.preventDefault())
// 阻止右键默认事件
const my = document.querySelector('#my');
// 既兼容移动端， 又兼容 PC 端
// 可以同时监听两组事件
// mousedown

// 区别 移动端 和 PC端
// PC 端 document.body.ontouchstart undefined
// 移动端 document.body.ontouchstart null
my.addEventListener('mousedown', (event)=>{
    // 先把坐标给过去
    start(event)
    function mouseMove(e) {
        move(e)
    }
    function mouseEnd(e) {
        end(e)
        document.removeEventListener('mousemove',mouseMove);
        document.removeEventListener('mouseend',mouseEnd);
    }
    // 每一个事件都有监听的前提
    document.addEventListener('mousemove',mouseMove)
    document.addEventListener('mouseup',mouseEnd)
})
my.addEventListener('touchstart', (event)=>{
    // 取到第一根手指的位置
    const touch = event.changedTouches[0];
    // console.log(touch);
    start(touch)
})

my.addEventListener('touchmove', ()=>{
    const touch = event.changedTouches[0];
    move(touch)
})

my.addEventListener('touchend', ()=>{
    const touch = event.changedTouches[0];
    end(touch)
})

let isTap = false, isPan = false, isPress = false;
let timeout = null;
let startX = 0, startY = 0;
let moves = [];
function start (point) {
    console.log('start',point)
    // tap 事件
    isTap = true;
    startX = point.clientX, startY = point.clientY
    timeout = setTimeout(()=>{
        if (isPan) return false;
        isPress = true;
        // 长按和 tap 只能有一个
        isTap = false;
    }, 500)
}

function move (point) {
    console.log('move',point)
    let dx = point.clientX - startX;
    let dy = point.clientY - startY;
    // 距离
    if (dx ** 2 + dy ** 2 > 100) {
        isPan = true;
        isTap = false;
        isPress = false;
    }
    if (isPan) {
        moves.push({dx,dy, t:Date.now()})
        moves = moves.filter( r => Date.now() - r.t < 300);
        // 存最近 300ms 移动的点
    }
}

function end (point) {
    console.log('end',point)
    if (isTap) {
        isTap = false;
        console.log('tap发生了')
    }
    if (isPress) {
        isPress = false;
        console.log('长按发生了')
    }
    if (isPan) {
        isPan = false; console.log('pan发生了')
    }
    let lastPoint = moves[0];
    let dx = point.clientX - startX;
    let dy = point.clientY - startY;
    let time300dx = dx - lastPoint.dx;
    let time300dy = dy - lastPoint.dy;
    let speed = Math.sqrt(time300dx ** 2 + time300dy ** 2) 
    / (Date.now() - lastPoint.t)
    if ( speed > 2.5) {
        console.log('flick')
    }
    // 清除 timeout 监听函数
    clearTimeout(timeout);
}