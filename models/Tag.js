// // Let’s complete the Tag model by defining its columns. I’ll walk through the existing code and add the necessary fields typically associated with a Tag model.
// // 1. Import Sequelize Components
const { Model, DataTypes } = require('sequelize');
// // •	Model: The base class for all Sequelize models.
// // •	DataTypes: Provides types for defining model attributes (e.g., INTEGER, STRING).

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

// // Define Columns for the Tag Model

// // Let’s add the following columns:
// // 	1.	id: The primary key.
// // 	2.	tag_name: The name of the tag.

// // Here’s the complete code with columns defined:

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection.js');

// class Tag extends Model {}

// Tag.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     tag_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'tag',
//   }
// );

// module.exports = Tag;

// Explanation of Columns
// 	1.	id:
// 	•	Type: INTEGER
// 	•	Attributes:
// 	•	allowNull: false: The field cannot be NULL.
// 	•	primaryKey: true: Sets this field as the primary key.
// 	•	autoIncrement: true: Automatically increments the value for each new record.
// 	2.	tag_name:
// 	•	Type: STRING
// 	•	Attributes:
// 	•	allowNull: false: The field cannot be NULL.

// Summary

// This Tag model is now fully defined with:
// 	•	An auto-incrementing primary key (id).
// 	•	A tag_name field for the tag’s name.
// 	•	Configuration options to:
// 	•	Disable timestamps.
// 	•	Use snake_case naming conventions.
// 	•	Freeze the table name to prevent pluralization.

// This model can be used in setting up associations with other models, such as:

// Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });
// Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });
