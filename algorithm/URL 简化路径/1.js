function resolve(baseUrl, moduleId){
    let res = [];
    moduleId = moduleId.split('/')
    for (let item of moduleId) {
        if (item === '.' || item === '') continue;
        else if (item === '..') res.pop()
        else res.push(item)
    }
    console.log(baseUrl + '/' + res.join('/'))
    return baseUrl + '/' + res.join('/')
}
resolve('http://www.baidu.com', 'a/b/c'); 
// 简化为-> http://www.baidu.com/a/b/c
resolve('http://www.baidu.com', 'a/../c'); 
// 简化为-> http://www.baidu.com/c
resolve('http://www.baidu.com/1/2', 'a/.././c'); 
// 简化为-> http://www.baidu.com/1/2/c