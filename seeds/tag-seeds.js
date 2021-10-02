const { Tag } = require("../models");
const tagData = [
  {
    tag_name: "Grocery",
  },
  {
    tag_name: "Shoes",
  },
  {
    tag_name: "Vegetables",
  },
  {
    tag_name: "Watches",
  },
  {
    tag_name: "Attire",
  },
  {
    tag_name: "Shoes",
  },
  {
    tag_name: "HouseItems",
  },
  {
    tag_name: "Nike",
  },
  {
    tag_name: "Liquid",
  },
];
const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;
