window.onload = function () {
    const swiper = document.querySelector('.swiper-wrapper');
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // console.log(event);
            event.preventDefault();
            // 1.取消之前的selected
            document.querySelector('.selected').classList.remove('selected'); //移除类 selected
            this.classList.add('selected'); // 添加类 selected
        }, false);
    })

    // 先拿到 swiper 的数据
    // bannerList 数据
    // 真的数据     真的可以做出来网易云音乐
    // XMLHttpRequest 太难了 现代版:fetch
    this.fetch('http://localhost:3000/banner').then(data => data.json())
        .then(data => {
            console.log(data);
            // data.banners 才是JSON数组
            swiper.innerHTML=data.banners.map(function (banner) {
                return`<div class="swiper-slide"><div class="img_box"><img src="${banner.imageUrl}" alt=""></div></div>
            `;
            }).join('');
        })

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })

}