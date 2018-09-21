
'use strict';
// app/controller/news.js
const Controller = require('egg').Controller;


class Cfg_SourceController extends Controller {

  // 获取数据库配置列表
  async list() {
    const ctx = this.ctx;
    const { Op } = ctx.app.Sequelize;
    const result = await ctx.service.cfgTable.list({ where: ctx.params.dbid, DT_NAME: { [Op.like]: ctx.params.searchtext } });
    ctx.body = {
      success: true,
      data: result,
    };
    ctx.status = 200;
  }
  // 获取单条数据库配置
  async getsingle() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgTable.find(ctx.params.id);
    ctx.body = {
      success: true,
      data: result,
    };
    ctx.status = 200;
  }
  // 添加数据库配置
  async create() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgTable.create(ctx.request.body);
    ctx.body = {
      success: true,
      data: result,
    };
    ctx.status = 200;
  }
  // 修改数据库配置
  async update() {
    const ctx = this.ctx;
    const result = await ctx.service.cfgTable.update({ DB_KEY: ctx.params.id, updates: ctx.request.body });
    ctx.body = {
      success: true,
      data: result,
    };
    ctx.status = 200;
  }
  // 删除数据库配置
  async del() {
    const ctx = this.ctx;

    const result = await ctx.service.cfgTable.del(ctx.params.id);
    ctx.body = {
      success: true,
      data: result,
    };
    ctx.status = 200;
  }
}

module.exports = Cfg_SourceController;
