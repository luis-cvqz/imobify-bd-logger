'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operation_logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service: {
        type: Sequelize.STRING,
        allowNull: false
      },
      operation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'operations',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      affected_table: {
        type: Sequelize.STRING,
        allowNull: false
      },
      element_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      ip: {
        type: Sequelize.INET,
        allowNull: false
      },
      user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNullfalse: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operation_logs');
  }
};