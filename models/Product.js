//imporing sequelize library
const { Model, DataTypes } = require("sequelize");
//setting up connection
const sequelize = require("../config/connection");

//creating product table
class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      promaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15,
      validate: {
        isNumeric: true,
      },
    },

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
