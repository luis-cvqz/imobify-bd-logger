'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class operations extends Model {
    static associate(models) { }
  }
  operations.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    operation: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    freezeTableNameL: true,
    modelName: 'operations',
  });
  return operations;
};