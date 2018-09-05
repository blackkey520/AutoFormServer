
'use strict';
// app/controller/news.js
const Controller = require('egg').Controller;
// 数据库Controller
class Cfg_DbController extends Controller {
  // 获取数据库配置列表
  async list() {
    const ctx = this.ctx;
    const response = { success: false, message: '操作失败' };
    const result = await ctx.service.cfgDb.list(ctx.query);
    if (result) {
      response.message = '操作成功';
      response.success = true;
      response.data = result;
    }
    ctx.body = response;
    ctx.status = 200;
  }
  async add() {
    await this.ctx.render('cfg_db/add.tpl', null);
  }
  async getsingle() {
    const ctx = this.ctx;
    const cfg_db_single = await ctx.service.cfgDb.find(ctx.query.DB_KEY);
    await this.ctx.render('cfg_db/edit.tpl', { cfg_db_single });
  }
  async create() {
    const ctx = this.ctx;
    await ctx.service.cfgDb.create(ctx.request.body);
    ctx.redirect('/cfg_db/list');
  }

  async update() {
    const ctx = this.ctx;
    const DB_KEY = ctx.query.DB_KEY;
    const body = ctx.request.body;
    const result = await ctx.service.cfgDb.update({ DB_KEY, updates: body });
    ctx.redirect('/cfg_db/list');
  }

  async del() {
    const ctx = this.ctx;
    const DB_KEY = ctx.query.DB_KEY;
    await ctx.service.cfgDb.del(DB_KEY);
    ctx.redirect('/cfg_db/list');
  }
}

module.exports = Cfg_DbController;
