// // This code defines a Sequelize model for a Category table. Here’s a line-by-line explanation, including suggestions on how to complete the model by defining its columns.

// // Code Breakdown

// // 1. Import Sequelize Components
const { Model, DataTypes } = require('sequelize');
// // •	Model: The base class for all Sequelize models.
// // •	DataTypes: Provides types for defining model attributes (e.g., STRING, INTEGER, etc.).

// // 2. Import the Sequelize Connection
const sequelize = require('../config/connection.js');
// // •	Purpose: Imports the Sequelize instance configured in ../config/connection.js.
// // •	Usage: Connects the model to the database.

// // 3. Define the Category Class
class Category extends Model {}
// // •	Purpose: Defines a Category model that extends the Model class.


// // Defining Columns

// // Let’s define a couple of example columns for the Category model:
//  !!!!!!!!!!! TODO below
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// // Explanation of Columns:
// // 	1.	id:
// // 	•	Type: INTEGER
// // 	•	Attributes:
// // 	•	allowNull: false: Field cannot be NULL.
// // 	•	primaryKey: true: Designates this field as the primary key.
// // 	•	autoIncrement: true: Automatically increments the value.
// // 	2.	category_name:
// // 	•	Type: STRING
// // 	•	Attributes:
// // 	•	allowNull: false: Field cannot be NULL.

// // Export the Model

module.exports = Category;

// // •	Purpose: Exports the Category model so it can be imported and used in other parts of the application.

// // Summary

// // This code defines a Category model with the following:
// // 	1.	Two columns: id (primary key) and category_name.
// // 	2.	Configuration:
// // 	•	No timestamps.
// // 	•	Table name is not pluralized.
// // 	•	Uses snake_case for database fields.
// // 	3.	Model Export: The model can be imported and used elsewhere in the app.

