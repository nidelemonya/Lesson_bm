// querySelector querySelectorAll 选中要加 .
// choose 这里是一个数组
const choose = document.querySelectorAll('.weui-tabbar__item');
const tabs = document.querySelectorAll('.weui-tab__panel');
// console.log(choose.length)
for (let i = 0; i < choose.length; i++) {
    choose[i].addEventListener('click', function () {
        // .call() 方法 传递this这个作用域 这里的this代表此时的点击事件
        showTab.call(this); // 点谁就代表谁 让showTab里面的this指向此刻的点击事件
    })
}

function showTab() {
    for (let j = 0, len = tabs.length; j < len; j++) {
        // console.log(choose[j]);
        // console.log(this);
        // === 表示数据和形式都要相等 全等于 
        if (choose[j] === this) {
            choose[j].classList.add('weui-bar__item_on');
            tabs[j].classList.add('show');
        } else {
            choose[j].classList.remove('weui-bar__item_on');// remove 移除
            tabs[j].classList.remove('show');
        }
    }
}

// 搜索
const searchBar = document.getElementById('searchBar');
const searchText = document.getElementById('searchText');
const searchInput = document.getElementById('searchInput');
const searchCancel = document.getElementById('searchCancel');
// click 参数
searchText.addEventListener('click', function () {
    searchBar.classList.add('weui-search-bar_focusing');
    // 自动聚焦方法
    searchInput.focus()
})
searchCancel.addEventListener('click', function () {
    searchBar.classList.remove('weui-search-bar_focusing');
})