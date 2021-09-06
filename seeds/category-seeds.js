const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "T-shirts",
  },
  {
    category_name: "Watches",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
