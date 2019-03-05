'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Menus', [{
      name: 'Burgers',
      day: 'Monday',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bread',
      day: 'Tuesday',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Burgers',
      day: 'Wednesday',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ice Cream',
      day: 'Thursday',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fries',
      day: 'Friday',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pizza',
      day: 'Saturdayday',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cake',
      day: 'Sunday',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
       Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
//# sourceMappingURL=20190304232720-demo-menu.js.map