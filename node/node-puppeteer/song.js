const axios = require('axios');

async function run(){
    // axios({
    //     url:'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA'
    // })
    // .then(res =>{

    // })
    // 等着 这个异步方法执行完成

    let result = await axios({
        url:'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA'
    })
    // 取到第一首歌的id
    let id = result.data.result.songs[0].id;
    // 拿到第一首歌的详情
    let detail = await axios({
        url:`http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`
    })
    console.log(detail);
}
run()