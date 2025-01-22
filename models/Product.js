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


module.exports = Product;


