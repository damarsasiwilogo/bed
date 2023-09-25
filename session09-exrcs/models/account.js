"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Account.hasOne(models.Profile, { foreignKey: "accountId" });
      Account.hasMany(models.Tweet, { foreignKey: "accountId"})
    }
  }
  Account.init(
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      password: DataTypes.STRING,
      password_confirmation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
