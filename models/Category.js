//Selecting the datatypes
const { model, datatypes } = require("sequelize");

//link up the sequelize file
const sequelize = require("../config/connection");

//setting up models
class Category extends Models {}

Category.init(
  {
    id: {
      type: datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    category_name: {
      type: datatypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
