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

