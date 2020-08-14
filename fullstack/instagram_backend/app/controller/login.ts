import { Controller } from 'egg';

class LoginController extends Controller { 
  // 面向对象写法
  public async index() {
    // 解构
    const { ctx } = this;
    ctx.body = JSON.stringify({
      msg: '登录成功'
    });
  }
}

export default LoginController;
