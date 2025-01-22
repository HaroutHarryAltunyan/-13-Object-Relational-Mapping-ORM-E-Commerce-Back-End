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

const Category = require("./Category"); // Import Category model
const Tag = require("./Tag"); // Import Tag model
const ProductTag = require("./ProductTag"); // Import ProductTag model

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
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      isDecimal: true, 
  },
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


module.exports = Product;


