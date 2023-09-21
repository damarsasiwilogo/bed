"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, { foreignKey: "userID" });

      Product.belongsToMany(models.Cart, {
        through: "CartProducts",
        foreignKey: "productID",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      userID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
