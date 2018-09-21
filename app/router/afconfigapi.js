'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { controller } = app;
  // 根目录
  app.get('/', controller.home.index);
  // 数据库配置
  app.get('/autoform/config/db/list', controller.cfgDb.list);
  app.get('/autoform/config/db/single/:id', controller.cfgDb.getsingle);
  app.post('/autoform/config/db/create', controller.cfgDb.create);
  app.post('/autoform/config/db/update/:id', controller.cfgDb.update);
  app.get('/autoform/config/db/del/:id', controller.cfgDb.del);
  app.get('/autoform/config/datasource/list/:dbid/:searchtext', controller.cfgSource.list);
  app.get('/autoform/config/datasource/single/:id', controller.cfgSource.getsingle);
  app.post('/autoform/config/datasource/create', controller.cfgSource.create);
  app.post('/autoform/config/datasource/update/:id', controller.cfgSource.update);
  app.get('/autoform/config/datasource/del/:id', controller.cfgSource.del);
};
