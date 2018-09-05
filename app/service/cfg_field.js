'use strict';

const Service = require('egg').Service;

class Cfg_Field extends Service {
  async list({ offset = 0, limit = 10, order_by = 'GUID', order = 'ASC' }) {
    return this.ctx.model.CfgField.findAndCountAll({
      offset,
      limit,
      order: [[ order_by, order.toUpperCase() ]],
    });
  }

  async find(id) {
    const cfg_field = await this.ctx.model.CfgField.findById(id);
    if (!cfg_field) {
      this.ctx.throw(404, 'cfg_field not found');
    }
    return cfg_field;
  }

  async create(cfg_field) {
    return this.ctx.model.CfgField.create(cfg_field);
  }

  async update({ id, updates }) {
    const cfg_field = await this.ctx.model.CfgField.findById(id);
    if (!cfg_field) {
      this.ctx.throw(404, 'cfg_field not found');
    }
    return cfg_field.update(updates);
  }

  async del(id) {
    const cfg_field = await this.ctx.model.CfgField.findById(id);
    if (!cfg_field) {
      this.ctx.throw(404, 'cfg_field not found');
    }
    return cfg_field.destroy();
  }
}

module.exports = Cfg_Field;
