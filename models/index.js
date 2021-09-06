//importing models
const Category = require("./Category");
const Tag = require("./Tag");
const Product = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

//Every category has multiple product
Category.hasMany(Product, {
  foreignKey: "category_id",
});

//We set up tags for every products
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});

//All tags belongs to all products
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
