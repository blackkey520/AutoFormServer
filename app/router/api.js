'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const apiRouter = app.router.namespace('/api');
  const { controller } = app;
  apiRouter.get('/list', controller.home.index);
  apiRouter.get('/validate/validatedb', controller.validate.validatedb);
};
