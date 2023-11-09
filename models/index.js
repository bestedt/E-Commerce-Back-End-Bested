// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// since the product belongs to one category, i used the belongto  method
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
// since the category can have multiple products, i used the has maany method
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
// since the product can have multiple tags and the tag can have many products, i used the belongto maany method
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
//multiple tags can have multiple products, i used the belongto maany method
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
