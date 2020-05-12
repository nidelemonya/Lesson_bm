const process = require('process');
const inquirer = require('inquirer');
const axios = require('axios');
const http  = require('http');
const fs = require('fs');
process.title = 'node music';
// console.log(process.argv,process.title);
let keywords = process.argv[2];
// console.log(keywords);
function request() {
    return axios({
            method: 'GET',
            url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
            params: {
                keywords
            }
        })
        .then(res => {
            // console.log(res);
            // promise then 回调里面 返回内容 在后面接着链式调用 then 就可以继续取到返回的内容
            return res.data;
        })
}
// 异步 上下键 移动
function choose(songs) {
    // value
    return inquirer.prompt([{
        type: 'list',
        name: 'songs',
        message: `共有${songs.length}首歌,请回车选择`,
        choices: songs.map(song=>{
            return {
                name: song.name,
                value: song.id
            }
        })
    }])
    .then(c=>{
        // console.log(c);
        const id = c.songs;
        return id;
    })
}
request().then(res => {
    // console.log(res);
    return choose(res.result.songs);
})
.then(id=>{
    axios({
        method: 'GET',
        url:'http://neteasecloudmusicapi.zhaoboy.com/song/url',
        params:{
            id
        }
    })
    .then(res =>{
        let url = res.data.data[0].url
        return url;
    })
    .then(url =>{
        if(!url){
            console.log('没有找到');
            return;
        }
        console.log('获取到 url',url,'开始下载...')
        http.get(url,(res)=>{
            // res.pipe(fs.createWriteStream(`./${id}.mp3`));
            res.pipe(fs.createWriteStream(`./${keywords}.mp3`));
            res.on('end',()=>{
                console.log('下载完毕')
            })
        })
    })
})