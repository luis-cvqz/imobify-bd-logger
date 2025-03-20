'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('operations', [
      { operation: 'create', createdAt: new Date(), updatedAt: new Date() },
      { operation: 'update', createdAt: new Date(), updatedAt: new Date() },
      { operation: 'delete', createdAt: new Date(), updatedAt: new Date() },
      { operation: 'logic_delete', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operations', null, {});
  }
};
