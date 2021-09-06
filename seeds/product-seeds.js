const { Product } = require("../models");

const productData = [
  {
    product_name: "Formal Shirt",
    price: 10.0,
    stock: 10,
    category_id: 1,
  },

  {
    product_name: "Cargo Shorts",
    price: 12.0,
    stock: 10,
    category_id: 2,
  },
  {
    product_name: "V Neck T-shirt",
    price: 14.0,
    stock: 10,
    category_id: 3,
  },

  {
    product_name: "Fossil Watch",
    price: 40.0,
    stock: 10,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(Productdata);

module.exports = seedProducts;
