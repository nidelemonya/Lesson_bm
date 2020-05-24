const http = require('http');
const url = require('url');
http.createServer((req, res) => {
    // console.log(req.url);
    // /api?callback=onResponse
  if (req.url.includes('/api')) {
    // let mathodName = req.url.split('=')[1];
    let myurl = url.parse(req.url);
    // console.log(myurl);
    let params = new URLSearchParams(myurl.query);
    let posts = ['js', 'php'];
    // console.log(params);
    let mathodName = params.get('callback');
    // console.log(mathodName);
    // res.end(JSON.stringify(posts));
    res.end(`${mathodName}(${JSON.stringify(posts)})`);
  }
})
.listen(9090, () => {
  console.log("在9090端口上启动成功");
})