import { Application } from 'egg';
// 约定即俗成 egg.js 
export default (app: Application) => {
  // no.1 解构控制器controller 路由 router
  const { controller, router } = app;
  // controller url -> controller -> render view
  // 路由列表, nginx 服务器反向代理 ip 地址 http://www.nidelemonya.cn -> ip -> nginx 80(负载均衡 分配至内网的哪台机器上) ->
  // 后端路由 / MVC Controller / index.html #root /   /api
  // 前端路由 react build js 挂载 单页应用 (SPA) 更快 useEffect -> reducer action -> api -> 后台/api/user /api 后端 吐数据的地方
  // Egg.js 7001
  router.get('/', controller.home.index);
  // 登录接口 /api/login
  router.get('/api/login', controller.login.index);
};
