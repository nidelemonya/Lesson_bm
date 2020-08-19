## 域名解析
## 服务器反向代理 nginx

防止各网站抢占80端口 直接将其分给 nginx


相应的命令：start nginx.exe 命令了。

nginx.exe -s stop                   //停止nginx

nginx.exe -s reload                //重新加载nginx

nginx.exe -s quit                     //退出nginx

### 部署React 项目
### 部署node 后端项目


linux
cd /etc/nginx/sites-enabled 配置文件  default


## pm2
pm2 start index.js 启动
pm2 stop index.js 停止
pm2 delete index.js 删除

pm2.json
{
    "apps": {
        "name": "file-upload",
        "script": "./index.js"
    }
}

pm2 start pm2.json 启动
pm2 stop pm2.json 停止
pm2 delete pm2.json 删除