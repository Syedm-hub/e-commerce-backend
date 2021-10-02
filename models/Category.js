const { Model, DataTypes } = require("sequelize");
<<<<<<< HEAD
const sequelize = require("../config/connection.js");
class Category extends Model {}
=======

const sequelize = require("../config/connection.js");

class Category extends Model {}

>>>>>>> 6313e3bb51efc2f1b5f1a7213681e372cdb61431
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
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
