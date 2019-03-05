'use strict';

module.exports = function (sequelize, DataTypes) {
  var Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {}); // Meal.associate = (models) => {
  //   // associations can be defined here
  //   Meal.belongsTo(models.Menu, {
  //     foreignKey: 'menuId',
  //     onDelete: 'CASCADE',
  //   });
  // };

  return Meal;
};
//# sourceMappingURL=meal.js.map