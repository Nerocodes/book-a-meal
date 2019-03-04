'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    total: DataTypes.FLOAT
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.hasMany(models.Meal, {
      foreignKey: 'orderId',
      as: 'meals',
    });
  };
  return Order;
};