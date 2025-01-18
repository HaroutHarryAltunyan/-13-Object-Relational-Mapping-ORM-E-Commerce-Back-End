// // This code sets up the Product model in Sequelize but currently lacks the column definitions. Let’s break down the code step-by-step and then define the necessary columns to complete the Product model.
// import important parts of sequelize library
// // 1. Import Sequelize Components
const { Model, DataTypes } = require('sequelize');
// // •	Model: The base class for all Sequelize models.
// // •	DataTypes: Provides types for defining model attributes (e.g., STRING, INTEGER, DECIMAL).

// import our database connection from config.js
// // 2. Import Database Connection
const sequelize = require('../config/connection');
// // •	Purpose: Imports the configured Sequelize connection instance.

// Initialize Product model (table) by extending off Sequelize's Model class
// // 3. Define the Product Class
class Product extends Model {}
// // •	Purpose: Creates a Product model class that extends Sequelize’s Model class.

// set up fields and rules for Product model
// // 4. Initialize the Product Model
Product.init(
  {
    // define columns

  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "category",
      key: "id",
    },
  },
},


  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
// // •	sequelize: The Sequelize connection instance.
// // •	timestamps: false: Disables createdAt and updatedAt columns.
// // •	freezeTableName: true: Prevents Sequelize from pluralizing the table name.
// // •	underscored: true: Uses snake_case for column names (e.g., product_name).
// // •	modelName: 'product': The model’s name, used internally by Sequelize.

// // Define Columns for the Product Model

// // Let’s define some columns typically found in a Product model:
// // 	•	id: Primary key.
// // 	•	product_name: Name of the product.
// // 	•	price: Price of the product.
// // 	•	stock: Quantity of the product in stock.
// // 	•	category_id: Foreign key referencing the Category model.

module.exports = Product;


// // import important parts of sequelize library
// const { Model, DataTypes } = require('sequelize');
// // import our database connection from config.js
// const sequelize = require('../config/connection');

// // Initialize Product model (table) by extending off Sequelize's Model class
// class Product extends Model {}

// // set up fields and rules for Product model
// // Product.init(
// //   {
// //     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     product_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//       validate: {
//         isDecimal: true,
//       },
//     },
//     stock: {
// //       type: DataTypes.INTEGER,
// //       allowNull: false,
// //       defaultValue: 10,
//       validate: {
//         isNumeric: true,
//       },
//     },
//     category_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'category',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
// //     freezeTableName: true,
// //     underscored: true,
//     modelName: 'product',
//   }
// );

// module.exports = Product;


// // Explanation of Columns
// // 	1.	id:
// // 	•	Type: INTEGER
// 	•	Attributes:
// 	•	allowNull: false: Field cannot be NULL.
// 	•	primaryKey: true: Designates this field as the primary key.
// 	•	autoIncrement: true: Automatically increments the value.
// // 	2.	product_name:
// 	•	Type: STRING
// 	•	Attributes:
// 	•	allowNull: false: Field cannot be NULL.
// //	3.	price:
// 	•	Type: DECIMAL(10, 2)
// 	•	Attributes:
// 	•	allowNull: false: Field cannot be NULL.
// 	•	Validation: Ensures the value is a decimal.
// //	4.	stock:
// 	•	Type: INTEGER
// 	•	Attributes:
// 	•	allowNull: false: Field cannot be NULL.
// 	•	defaultValue: 10: Sets the default stock quantity to 10.
// 	•	Validation: Ensures the value is numeric.
// //	5.	category_id:
// // 	•	Type: INTEGER
// // 	•	Attributes:
// // 	•	References the id column in the Category table to establish a foreign key relationship.

// // Summary

// // This Product model now includes:
// // 	•	An auto-incrementing primary key (id).
// // 	•	Fields for product name, price, and stock.
// // 	•	A foreign key (category_id) referencing the Category model.
// // 	•	Configuration options to keep table names consistent and disable timestamps.

// This model can now be used in your routes and synced with your database using Sequelize!