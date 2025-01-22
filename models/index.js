// // This code sets up the relationships between the models in a Sequelize-based application. Let’s go through the code in detail, including the relationships that need to be defined.
// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// // •	Purpose: Import the models (Product, Category, Tag, ProductTag) so their relationships can be defined.
// // •	Each of these models is assumed to be defined in their respective files in the same directory.


// // 2.	Define Relationships

// // Sequelize uses methods like belongsTo, hasMany, and belongsToMany to establish relationships between models.

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: "CASCADE",
});
// // •	Relationship: Each Product belongs to one Category.
// // •	foreignKey: The foreign key in the Product table referencing the Category table.

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: "CASCADE",

});
// // •	Relationship: A Category can have multiple Products.
// // •	foreignKey: The foreign key in the Product table that associates it with the Category.

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// // •	Relationship: A Product can have multiple Tags through the ProductTag join table.
// // •	through: Specifies the join table (ProductTag).
// // •	foreignKey: The foreign key in the ProductTag table referencing the Product.


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
// // •	Relationship: A Tag can be associated with multiple Products through the ProductTag join table.
// // •	through: Specifies the join table (ProductTag).
// // •	foreignKey: The foreign key in the ProductTag table referencing the Tag.

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// // Explanation of Relationships
// // 	1.	Product ↔ Category:
// // 	•	One-to-Many:
// // 	•	A Product belongs to one Category.
// // 	•	A Category can have many Products.
// // 	2.	Product ↔ Tag:
// // 	•	Many-to-Many:
// // 	•	A Product can have multiple Tags.
// // 	•	A Tag can be associated with multiple Products.
// // 	•	This relationship is facilitated through the ProductTag join table.

// // Next Steps
// // 	1.	Ensure Foreign Keys in Models:
// // 	•	Make sure the Product, Category, and Tag models have appropriate foreign key fields defined.
// // Example (Product.js):

// // category_id: {
// //   type: DataTypes.INTEGER,
// //   references: {
// //     model: 'category',
// //     key: 'id',
// //   },
// // }

// // 2.	Sync the Database:
// // sequelize.sync({ force: false });

// // 3.	Test the Relationships:
// // •	Create sample data and test the associations using queries.

// // This setup allows you to manage products, categories, and tags with Sequelize, handling both one-to-many and many-to-many relationships effectively!