// // Let’s complete the Tag model by defining its columns. I’ll walk through the existing code and add the necessary fields typically associated with a Tag model.
// // 1. Import Sequelize Components
const { Model, DataTypes } = require('sequelize');
// // •	Model: The base class for all Sequelize models.
// // •	DataTypes: Provides types for defining model attributes (e.g., INTEGER, STRING).

const Product = require("./Product.js"); // Import Product model
const ProductTag = require("./ProductTag.js"); // Import ProductTag model

// // 2. Import Database Connection
const sequelize = require('../config/connection.js');
// // •	Purpose: Imports the configured Sequelize connection instance.

// // 3. Define the Tag Class
class Tag extends Model {}
// // •	Purpose: Defines the Tag model class that extends Sequelize’s Model class.

// // 4. Initialize the Tag Model
Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// // •	sequelize: The Sequelize connection instance.
// // •	timestamps: false: Disables createdAt and updatedAt fields.
// // •	freezeTableName: true: Prevents Sequelize from pluralizing the table name.
// // •	underscored: true: Uses snake_case for column names (e.g., tag_name).
// // •	modelName: 'tag': The model’s name used internally by Sequelize.

module.exports = Tag;

