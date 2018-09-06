'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { controller } = app;
  //根目录
  app.get('/', controller.home.index);
  // 数据库配置
  app.get('/db/list', controller.cfgDb.list);
  app.get('/db/single/:id', controller.cfgDb.getsingle);
  app.post('/db/create', controller.cfgDb.create);
  app.post('/db/update/:id', controller.cfgDb.update);
  app.get('/db/del/:id', controller.cfgDb.del);
};
