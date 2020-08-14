二十万技术装备
    React(Antd) + ts(大型项目的保证) + egg(koa 企业后端) mysql/mongodb

1. fullstack 架构
    frontend React Antd/Element 企业级开发  PC 10%/mobile 网页访问 + 微信公众号 工作量大 移动开发时代 Android IOS 时代已过去 前端主导 70%/PC ADMIN 后台开发 组件化功能 出错不要紧 /小程序 APP 20%
    前段 UI界面 + 后台管理 + APP类化(小程序 unionApp flutter RN)

    React 思想 UI + MVVM + 数据管理 生态 React -> RN -> 小程序

1. instagram_backend 配置
- npm init egg --type=ts 初始化 使用 egg 作为模板
- yarn dev

2. instagram_frontend
- npx create-react-app instagram --type=typescript 
- yarn start

   解决跨域问题 package.json 加
  "proxy": "http://127.0.0.1:7001/"
2. egg
    - Mvc Model View Controller
    - koa 的封装 轻量级