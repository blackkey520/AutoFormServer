'use strict';

const Service = require('egg').Service;

class Cfg_Db extends Service {
  async list({ offset = 0, limit = 10, order_by = 'DB_KEY', order = 'ASC' }) {
    return this.ctx.model.CfgDb.findAndCountAll({
      offset,
      limit,
      order: [[ order_by, order.toUpperCase() ]],
    });
  }

  async find(id) {
    const cfg_db = await this.ctx.model.CfgDb.findById(id);
    return cfg_db;
  }

  async create(cfg_db) {
    return this.ctx.model.CfgDb.create(cfg_db);
  }

  async update({ DB_KEY, updates }) {
    const cfg_db = await this.ctx.model.CfgDb.findById(DB_KEY);
    if (!cfg_db) {
      this.ctx.throw(404, 'cfg_db not found');
    }
    return cfg_db.update(updates);
  }

  async del(id) {
    const cfg_db = await this.ctx.model.CfgDb.findById(id);
    if (!cfg_db) {
      this.ctx.throw(404, 'cfg_db not found');
    }
    return cfg_db.destroy();
  }
}

module.exports = Cfg_Db;
