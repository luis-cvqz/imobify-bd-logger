'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class operation_logs extends Model {
    static associate(models) {
      operation_logs.belongsTo(models.operations);
    }
  }
  operation_logs.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false
    },
    operation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    affected_table: {
      type:DataTypes.STRING,
      allowNull: false
    },
    element_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ip: {
      type: DataTypes.INET,
      allowNull: false
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'operation_logs',
  });
  return operation_logs;
};