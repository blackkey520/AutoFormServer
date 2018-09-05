
'use strict';
// app/controller/news.js
const Controller = require('egg').Controller;

class ValidateController extends Controller {
  // api
  async validatedb() {
    const ctx = this.ctx;
    let response = true;
    const result = await ctx.service.cfgDb.find(ctx.query.DB_KEY);
    if (result) {
      response = false;
    }
    ctx.body = response;
    ctx.status = 200;
  }
}

module.exports = ValidateController;
