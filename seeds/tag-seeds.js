const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Fossil",
  },
  {
    tag_name: "Blue",
  },
  {
    tag_name: "White",
  },
  {
    tag_name: "Red",
  },
  {
    tag_name: "Green",
  },
  {
    tag_name: "Gold",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
