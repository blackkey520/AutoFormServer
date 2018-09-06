'use strict';

exports.keys = 'autoform';
// mount middleware
exports.middleware = [ 'robot', 'errorHandler', 'apiWrapper' ];
(exports.errorHandler = {
  match: '/',
});
// middleware config
(exports.robot = {
  ua: [ /curl/i, /Baiduspider/i ],
});
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'db_author',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'P@ssw0rd',
  operatorsAliases: false,
};
// 添加 news 的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
