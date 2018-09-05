'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;

  const Cfg_Db = app.model.define('Cfg_Db', {
    DB_KEY: {
      type: STRING(50),
      primaryKey: true,
    }, // 库编号
    DB_NAME: STRING(50), // 库名称
    DB_VERSION: STRING(50), // 库类型
    DB_IP: STRING(50), // 库ip
    DB_USERNAME: STRING(50), // 库用户名
    DB_PWD: STRING(50), // 库密码
    DB_MARK: STRING(50), // 库备注
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return Cfg_Db;
};
