// // Let’s break down the code for seeding the Category model with initial data.
const { Category } = require('../models');
// // 1.	Import Category Model
// // •	Imports the Category model from the models directory.
// // •	Usage: This allows the script to interact with the Category table in the database.

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
// // 2.	Define categoryData Array
// // •	Purpose: Contains the initial seed data for the Category table.
// // •	Structure: Each object in the array represents a category with a category_name property.
// // Example Data in the Array:
// // category_name
// // “Shirts”
// // “Shorts”
// // “Music”
// // “Hats”
// // “Shoes”

const seedCategories = () => Category.bulkCreate(categoryData);
// // 3.	Define seedCategories Function
// // •	Purpose: Uses Category.bulkCreate() to insert multiple categories into the database at once.
// // •	bulkCreate: A Sequelize method that efficiently creates multiple records with a single database query.
// // •	Return Value: Returns a promise that resolves when the data is successfully inserted.

module.exports = seedCategories;
// // 4.	Export seedCategories Function
// // •	Purpose: Exports the seedCategories function so it can be imported and executed in other parts of the application (e.g., a seed.js file).

// // How to Use This Seeding Script
// // 1.	Create a seed.js File:
// // const sequelize = require('../config/connection');
// // const seedCategories = require('./category-seeds');

// // const seedAll = async () => {
// //   await sequelize.sync({ force: true }); // Drops and recreates tables
// //   console.log('\n----- DATABASE SYNCED -----\n');

// //   await seedCategories();
// //   console.log('\n----- CATEGORIES SEEDED -----\n');

// //   process.exit(0);
// // };

// // seedAll();

// // 2.	Run the Seeding Script:
// // node seed.js
// // •	This will insert the categoryData into the Category table.

// // Summary
// // 	•	Purpose: Seeds the Category table with predefined data.
// // 	•	Efficiency: Uses bulkCreate for efficient batch insertion.
// // 	•	Reusability: The seedCategories function can be reused in different parts of your project.