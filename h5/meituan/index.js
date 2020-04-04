// 1. 距离
// 2. 点 经纬度
// 114.312415, 25.686969
// 命名规范
// 114.311825,25.695013
// 114.315627,25.703063
const myLatitude = '25.686969',
    myLongitude = '114.312415',
    kfcLatitude = '25.695013',
    kfcLongitude = '114.311825';
// 坐标 店名 评分, ... {} JSON 对象字面量
const shops = [{
        name: '肯德基(崇义店)',
        pos: [114.311825, 25.686969],
        logo: 'https://img.meituan.net/600.600/msmerchant/ac8497ed2a3cdf27113f3e5120b6496a654741.jpg@220w_125h_1e_1c',
        score: 4.5,
        amount:1800,
        time:30,
        start_deliv:45,
        on_deliv:5,
        average:40,
        mtzs:1,
        reduction:'满40减6;满60减10;满90减16',
        discount:'折扣商品9折起'
    },
    {
        name: '牛男手造(崇义店)',
        pos: [114.316347,25.698024],
        logo: 'https://img.meituan.net//msmerchant/6161472b752fbaf8fd521e51c6be779c65735.jpg@188w_106h_1e_1c',
        score: 4.8,
        amount:2800,
        time:30,
        start_deliv:45,
        on_deliv:5,
        average:30,
        mtzs:1,
        reduction:'满50减6;满80减10;满100减18',
        discount:''
    },
    {
        name: '麻辣香锅(崇义店)',
        pos: [114.318017,25.693011],
        logo: 'https://img.meituan.net//msmerchant/746ca2daaf968bcda8df3774dc58453087956.jpg@188w_106h_1e_1c',
        score: 4.2,
        amount:3400,
        time:30,
        start_deliv:25,
        on_deliv:5,
        average:40,
        mtzs:0,
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品5折起'
    },
    {
        name: '川西坝子(崇义店)',
        pos: [114.318988,25.691822],
        logo: 'https://img.meituan.net//msmerchant/526235ea490f56d823cd05eab59ce559367109.jpg@188w_106h_1e_1c',
        score: 4.9,
        amount:5800,
        time:30,
        start_deliv:50,
        on_deliv:5,
        average:40,
        mtzs:0,
        reduction:'满50减6;满80减10;满100减16',
        discount:''
    }, {
        name: '小就坎(崇义店)',
        pos: [114.313517,25.709745],
        logo: 'https://img.meituan.net//msmerchant/5e09ea9aea69db584d778f2b8155a7d6432541.png@188w_106h_1e_1c',
        score: 3.3,
        amount:1500,
        time:30,
        start_deliv:25,
        on_deliv:5,
        average:30,
        mtzs:0,
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品8折起'
    }, {
        name: '鱼没有(崇义店)',
        pos: [114.316221,25.707051],
        logo: 'https://img.meituan.net//msmerchant/791a46349120305f33da96e731c0c0ca64253.jpg@188w_106h_1e_1c',
        score: 4.1,
        amount:2100,
        time:30,
        start_deliv:30,
        on_deliv:5,
        average:34,
        mtzs:1,
        reduction:'满50减6;满80减10;满100减16',
        discount:''
    }, {
        name: '自助火锅城(崇义店)',
        pos: [114.315448,25.691301],
        logo: 'https://img.meituan.net//msmerchant/ee20dabfd23c9bbc7a2f22a639036e293123702.jpg@188w_106h_1e_1c',
        score: 2.6,
        amount:1200,
        time:30,
        start_deliv:60,
        on_deliv:5,
        average:50,
        mtzs:0,
        reduction:'满56减6;满80减10;满100减16',
        discount:'折扣商品6折起'
    }, {
        name: '不出名火锅(崇义店)',
        pos: [114.321557,25.689356],
        logo: 'https://p0.meituan.net/600.600/bbia/7b181136f08f4dcd8b51a4739972fe5c178903.jpg@220w_125h_1e_1c',
        score: 1.8,
        amount:90,
        time:30,
        start_deliv:24,
        on_deliv:4,
        average:26,
        mtzs:1,
        reduction:'',
        discount:''
    }, {
        name: '百味鸡(崇义店)',
        pos: [114.311047,25.702273],
        logo: 'https://p0.meituan.net/600.600/bbia/f41e4e67da01a134c4201aba9c154bef209381.jpg@220w_125h_1e_1c',
        score: 4.8,
        amount:2600,
        time:30,
        start_deliv:30,
        on_deliv:2,
        average:35,
        mtzs:0,
        reduction:'满50减6;满80减10;满100减16',
        discount:'折扣商品5折起'
    }, {
        name: '骨之味(崇义店)',
        pos: [114.317344,25.690959],
        logo: 'https://p0.meituan.net//bbia/68a0ec5816c24292cb2fe949338d9c1b374824.jpg@188w_106h_1e_1c',
        score: 4.9,
        amount:3800,
        time:30,
        start_deliv:42,
        on_deliv:6,
        average:40,
        mtzs:1,
        reduction:'满35减6;满80减10;满100减16',
        discount:''
    }
];
// sdk 有点大，他在远方
// js 事件机制
window.onload = function () {
    const shopContainer = document.querySelector('.shop-list');
    const map = new BMap.Map(); // 实例化地图
    const mypoint = new BMap.Point(myLongitude, myLatitude);

    for (let i = 0; i < shops.length; i++) {
        let shopPoint = new BMap.Point(shops[i].pos[0], shops[i].pos[1]);
        let per = (shops[i].score/5) * 100;
        let distance = parseDistance(
            //   // 925.1111
            map.getDistance(mypoint, shopPoint)
        );
        shopContainer.innerHTML += `
                    <div class="poi-item-wrapper">
                        <div class="poi-info-wrapper">
                            <div class="image-wrapper">
                                <div class="imgbox" >
                                    <img src="${shops[i].logo}" alt=""></img>
                                </div>
                            </div>
                            <div class="poi-info">
                                <div class="poi-name"><h4>${shops[i].name}</h4></div>
                                    <div class="price-wrapper">
                                                <span class="vote-star">
                                                    <i style="width:${per}%"></i>
                                                </span>
                                                <span class="score">${shops[i].score.toFixed(1)}</span>
                                                <span class="amount">月售${shops[i].amount}+</span>
                                                <span class="time">${shops[i].time}分钟</span>
                                            <span class="location special_line">${distance}</span>
                                    </div>
                                    <div class="delivery-wrapper">
                                        <span class="special_line"">起送￥${shops[i].start_deliv}</span>
                                        <span class="special_line">配送￥${shops[i].on_deliv}</span>
                                        <span class="special_line">人均￥${shops[i].average}</span>
                                        <div>
                                            <img class="mtzs" src="https://bruce-shy.github.io/Lesson_bm/h5/meituan/material/mtzs.png" alt=""></img>
                                        </div>
                                    </div>
                                    <div class="reduction-wrapper">
                                        <div class="price-img">
                                            <img class="reduction-img" src="https://bruce-shy.github.io/Lesson_bm/h5/meituan/material/3.png" alt=""></img>
                                        </div>
                                        <div class="dire">${shops[i].reduction}</div>
                                    </div>
                                    <div class="discount-wrapper">
                                        <div class="price-img" >
                                            <img class="discount-img" src="https://bruce-shy.github.io/Lesson_bm/h5/meituan/material/4.png" alt=""></img>
                                        </div>
                                        <div class="dire">${shops[i].discount}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                `
                const reduction_img = document.getElementsByClassName('reduction-img');
                const discount_img = document.getElementsByClassName('discount-img');
                const mtzs_img = document.getElementsByClassName('mtzs');
                if(shops[i].reduction ==""){
                    reduction_img[i].src = '';
                }
                if(shops[i].discount ==""){
                    discount_img[i].src = '';
                    // css隐藏页面元素的方法
                    // document.querySelector("#img4").style.opacity=0;
                    // document.querySelector("#img4").style.visibility="hidden";
                    // document.querySelector("#img3").style.display="none";
                }
                // console.log(shops[i].mtzs)
                if(shops[i].mtzs == 0){
                    mtzs_img[i].src = '';
                }
    }

    function parseDistance(distance) {
        // 如果 > 1000 米 返回 4.1km
        // 否则 整数 936m
        if (distance < 1000) {
            return parseInt(distance) + 'm';
        } else {
            return (distance / 1000).toFixed(1) + 'km';
        }
    }
    //     // 开始我们的js编程
    //     const map = new BMap.Map();//实例化地图
    //     // map.centerAndZoom("崇义县阳光小区", 17)//中心设置zoom

    //     // 两点距离
    //     const mypoint = new BMap.Point(myLongitude, myLatitude);
    //     const kfcPoint = new BMap.Point(kfcLongitude, kfcLatitude);
    //     // const distance = parseDistance(map.getDistance(mypoint, kfcPoint));
    //     // Number
    //     // console.log(distance);
    //     // . 选择类名
    //     // document.querySelector('.poi-name').innerHTML = '肯德基';
    //     // document.querySelector('.location').innerHTML = distance;
    //     // document.querySelector('.imgbox img').src = "https://p0.meituan.net/200.0/deal/607cffdccca7f4da09a2dddeedd31a8e49072.jpg@126_0_388_388a%7C267h_267w_2e_100Q";
}