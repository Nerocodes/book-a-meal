'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  // Meal.associate = (models) => {
  //   // associations can be defined here
  //   Meal.belongsTo(models.Menu, {
  //     foreignKey: 'menuId',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return Meal;
};