'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      as: 'orders'
    });
  };

  return User;
};
//# sourceMappingURL=user.js.map