'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    day: DataTypes.STRING
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
    // Menu.hasMany(models.Meal, {
    //   foreignKey: 'menuId',
    //   as: 'meals',
    // });
  };
  return Menu;
};