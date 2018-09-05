'use strict';
const co = require('co');
module.exports = {
  up: co.wrap(function* (db, Sequelize) {
    const { INTEGER, DATE, STRING } = Sequelize;
    yield db.createTable('Cfg_Db', {
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
    });
    yield db.createTable('Cfg_Table', {
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
    });
    yield db.createTable('Cfg_Field', {
      GUID: {
        type: STRING(50),
        primaryKey: true,
      }, // GUID
      DT_CONFIG_ID: STRING(100), // 表配置编号
      DT_NAME: STRING(100), // 表名
      DF_NAME: STRING(100), // 字段名
      DF_NAME_CN: STRING(100), // 字段名称（中文）
      DF_ORDER: INTEGER, // 是否是排序字段
      DF_CONTROL_TYPE: STRING(50), // 控件类型
      DF_ISPRIMARYKEY: INTEGER, // 是否是主键
      DF_FOREIGN_TYPE: INTEGER, // 外键类型
      DF_FOREIGN_DT_CONFIGID: STRING(100), // 外键表配置编号
      DF_FOREIGN_RELATION_TYPE: STRING(100), // 外键关系类型（枚举、外键表）
      DF_FOREIGN_DF_ID: STRING(150), // 外键字段编号
      DF_FOREIGN_DF_NAME: STRING(150), // 外键字段名称
      DF_ENUM_NAME: STRING(2000), // 枚举外键json
      DF_DATEFORMAT: STRING(50), // 字段格式化
      DF_DEFAULTVALUE: STRING(100), // 字段默认值
      DF_LIST_ISSHOW: INTEGER, // 是否在列表显示
      DF_LIST_WITH: INTEGER, // 列表宽度
      DF_ISFIXED: INTEGER, // 列表中是否固定
      DF_ISADD: INTEGER, // 是否可以被添加
      DF_ISEDIT: INTEGER, // 是否可以编辑
      DF_ISQUERY: INTEGER, // 是否可以查询
      DF_QUERY_CONTROL_TYPE: STRING(50), // 查询控件类型
      DF_LIST_ISEXPORT: INTEGER, // 是否可以导出
      DF_LIST_ISIMPORT: INTEGER, // 是否可以导入
      DF_CONDITION: STRING(50), // 字段条件
      DF_ISNOTNULL: INTEGER, // 字段是否可以为空
      DF_COLSPAN: INTEGER, // 列容纳
      DF_ROWSPAN: INTEGER, // 行容纳
      DF_VALIDATE: STRING(500), // 验证方式
      DF_REMARK: STRING(500), // 备注
      DF_TOOLTIP: STRING(100), // 字段提示信息
      DF_CREATEDATE: DATE, // 创建时间
      DF_ENCRYPE: STRING(50), // 加密方式
      DF_FORMAT: STRING(1000), // 格式化方式
      DF_UNIT: STRING(50), // 字段单位
      DF_WIDTH: STRING(50), // 字段显示宽度
      DF_HEIGHT: STRING(50), // 字段显示高度
      DF_OTHEROPTIONS: STRING(1000), // 其他配置
      DF_TYPE: INTEGER, // 字段类型
      DF_LENGTH: INTEGER, // 字段长度
    });
  }),

  down: co.wrap(function* (db) {
    yield db.dropTable('Cfg_Db');
    yield db.dropTable('Cfg_Table');
    yield db.dropTable('Cfg_Field');
  }),
};
