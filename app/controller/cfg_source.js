
'use strict';
// app/controller/news.js
const Controller = require('egg').Controller;

class Cfg_SourceController extends Controller {
  // api

  // 服务器渲染Controller
  async index() {
    debugger;
    const ctx = this.ctx;
    const cfg_db_list = await ctx.service.cfgTable.list({});
    debugger;
    await this.ctx.render('cfg_source/index.tpl', { cfg_db_list });
  }
}

module.exports = Cfg_SourceController;
