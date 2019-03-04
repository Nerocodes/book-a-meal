'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Orders', [{
    total: 6000,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    total: 8000,
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Orders', null, {});
  }
};
