'use strict';

const Service = require('egg').Service;

class Cfg_Table extends Service {
  async list({ where = {}, order_by = 'GUID', order = 'ASC' }) {
    debugger;
    return this.ctx.model.CfgTable.findAll({
      where,
      order: [[ order_by, order.toUpperCase() ]],
    });
  }

  async find(id) {
    const cfg_table = await this.ctx.model.CfgTable.findById(id);
    if (!cfg_table) {
      this.ctx.throw(404, 'cfg_table not found');
    }
    return cfg_table;
  }

  async create(cfg_table) {
    return this.ctx.model.CfgTable.create(cfg_table);
  }

  async update({ id, updates }) {
    const cfg_table = await this.ctx.model.CfgTable.findById(id);
    if (!cfg_table) {
      this.ctx.throw(404, 'cfg_table not found');
    }
    return cfg_table.update(updates);
  }

  async del(id) {
    const cfg_table = await this.ctx.model.CfgTable.findById(id);
    if (!cfg_table) {
      this.ctx.throw(404, 'cfg_table not found');
    }
    return cfg_table.destroy();
  }
}

module.exports = Cfg_Table;
