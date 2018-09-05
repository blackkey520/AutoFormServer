'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/home/homepage', controller.home.homepage);
  router.get('/cfg_db/list', controller.cfgDb.list);
  router.get('/cfg_db/add', controller.cfgDb.add);
  router.get('/cfg_db/edit', controller.cfgDb.getsingle);
  router.post('/cfg_db/update', controller.cfgDb.update);
  router.get('/cfg_db/del', controller.cfgDb.del);
  router.post('/cfg_db/create', controller.cfgDb.create);
  router.get('/cfg_source/index', controller.cfgSource.index);
};

