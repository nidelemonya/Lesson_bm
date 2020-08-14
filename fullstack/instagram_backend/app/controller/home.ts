import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // node HTTP 协议 基于应答式 ctx = request + response
    // ctx.response 响应
    ctx.body = 'hello lemon';
    // ctx 上下文环境
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
