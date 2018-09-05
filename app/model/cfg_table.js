'use strict';
module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const Cfg_Table = app.model.define('Cfg_Table', {
    GUID: {
      type: STRING(50),
      primaryKey: true,
    }, // GUID
    DT_CONFIG_ID: STRING(100), // 表配置编号
    DT_NAME: STRING(100), // 表名
    DT_NAME_CN: STRING(100), // 表名（中文）
    DT_ORDER: STRING(200), // 排序字段
    DT_CONN: STRING(50), // 连接编号
    DT_REMARK: STRING(500), // 表备注
    DT_PRIMARYKEY: STRING(200), // 表主键
    DT_CREATEDATE: DATE, // 创建日期
    DT_STATICQUERY: STRING(500), // 静态查询字段
  }, {
    timestamps: false,
    freezeTableName: true,
  });
  return Cfg_Table;
};
