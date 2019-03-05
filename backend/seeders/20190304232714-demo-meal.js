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
   return queryInterface.bulkInsert('Meals', [{
    name: 'Chicken Burger',
    description: 'A lot of chicken',
    price: 3000,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    name: 'BBQ Pizza',
    description: 'BBQ in Pizza',
    price: 5000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },{
    name: 'Chocolate Cake',
    description: 'Chocolate thats never late',
    price: 2000,
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
   return queryInterface.bulkDelete('Meals', null, {});
  }
};
