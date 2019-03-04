'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    total: DataTypes.FLOAT
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
    Order.hasMany(models.Meal, {
      foreignKey: 'orderId',
      as: 'meals',
    });
  };
  return Order;
};