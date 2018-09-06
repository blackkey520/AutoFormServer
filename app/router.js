
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/autoformapi')(app);
  require('./router/baseapi')(app);
};
