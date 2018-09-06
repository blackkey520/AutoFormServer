
'use strict';
// app/controller/news.js
const Controller = require('egg').Controller;
// 数据库Controller
class Cfg_DbController extends Controller {
  // 获取数据库配置列表
  async list() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgDb.list(ctx.query);
    ctx.body = {
      success:true,
      data:result
    };
    ctx.status = 200;
  }
  // 获取单条数据库配置
  async getsingle() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgDb.find(ctx.params.id);
    ctx.body = {
      success:true,
      data:result
    };
    ctx.status = 200;
  }
  // 添加数据库配置
  async create() {
    const ctx = this.ctx;
    const result =await ctx.service.cfgDb.create(ctx.request.body);
    ctx.body = {
      success:true,
      data:result
    };
    ctx.status = 200;
  }
  // 修改数据库配置
  async update() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgDb.update({ DB_KEY:ctx.query.id, updates: ctx.request.body });
    ctx.body = {
      success:true,
      data:result
    };
    ctx.status = 200;
  }
  // 删除数据库配置
  async del() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgDb.del(ctx.query.id);
    ctx.body = {
      success:true,
      data:result
    };
    ctx.status = 200;
  }
}

module.exports = Cfg_DbController;
