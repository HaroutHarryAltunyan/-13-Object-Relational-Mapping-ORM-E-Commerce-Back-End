// // This code defines a ProductTag model in Sequelize but currently lacks the column definitions. Let’s walk through the setup step-by-step and add the necessary columns to complete the ProductTag model.

// // 1. Import Sequelize Components
const { Model, DataTypes } = require('sequelize');
// // •	Model: The base class for all Sequelize models.
// // •	DataTypes: Provides types for defining model attributes (e.g., INTEGER, STRING).

// // 2. Import Database Connection
const sequelize = require('../config/connection');
// // •	Purpose: Imports the configured Sequelize connection instance.

// // 3. Define the ProductTag Class
class ProductTag extends Model {}

// // •	Purpose: Creates the ProductTag model by extending Sequelize’s Model class.
// // 4. Initialize the ProductTag Model
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// // •	sequelize: The Sequelize connection instance.
// // •	timestamps: false: Disables createdAt and updatedAt fields.
// // •	freezeTableName: true: Prevents Sequelize from pluralizing the table name.
// // •	underscored: true: Uses snake_case for column names (e.g., product_id).
// // •	modelName: 'product_tag': The model’s name used internally by Sequelize.

module.exports = ProductTag;

// Define Columns for ProductTag

// // The ProductTag model acts as a join table for the many-to-many relationship between Product and Tag. Therefore, it typically includes:
// //	1.	id: A unique primary key.
// //	2.	product_id: Foreign key referencing the Product model.
// //	3.	tag_id: Foreign key referencing the Tag model.

// Here’s the updated code with these columns defined:
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class ProductTag extends Model {}

// ProductTag.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     product_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'product',
//         key: 'id',
//       },
//       allowNull: false,
//     },
//     tag_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'tag',
//         key: 'id',
//       },
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'product_tag',
//   }
// );

// module.exports = ProductTag;

// Explanation of Columns
// 	1.	id:
// 	•	Type: INTEGER
// 	•	Attributes:
// 	•	allowNull: false: Field cannot be NULL.
// 	•	primaryKey: true: Marks this field as the primary key.
// 	•	autoIncrement: true: Automatically increments the value.
// 	2.	product_id:
// 	•	Type: INTEGER
// 	•	Attributes:
// 	•	References the id column in the Product table.
// 	•	allowNull: false: Field cannot be NULL.
// 	3.	tag_id:
// 	•	Type: INTEGER
// 	•	Attributes:
// 	•	References the id column in the Tag table.
// 	•	allowNull: false: Field cannot be NULL.

// // Summary

// // This ProductTag model acts as a join table for the many-to-many relationship between Product and Tag. It includes:
// 	•	An auto-incrementing primary key (id).
// 	•	Foreign keys for product_id and tag_id.
// 	•	Configuration to:
// 	•	Disable timestamps.
// 	•	Use snake_case for column names.
// 	•	Prevent table name pluralization.

// // This model is now ready to be used in setting up associations like:

// // Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
// // Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });