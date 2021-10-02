const { Category } = require("../models");
const categoryData = [
  {
    category_name: "Household products",
  },
  {
    category_name: "Grocery",
  },
  {
    category_name: "Fashion",
  },
  {
    category_name: "Shoes",
  },
  {
    category_name: "Clothing",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;
