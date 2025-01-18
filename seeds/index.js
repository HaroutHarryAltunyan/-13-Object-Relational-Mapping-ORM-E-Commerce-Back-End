// // Let’s break down the seedAll.js script line by line. This script is responsible for seeding your database with initial data for categories, products, tags, and product-tag relationships using Sequelize.
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
// // 1.	Import Seeding Functions
// // •	seedCategories: Seeds the Category table with predefined categories.
// // •	seedProducts: Seeds the Product table with predefined products.
// // •	seedTags: Seeds the Tag table with predefined tags.
// // •	seedProductTags: Seeds the ProductTag table to establish relationships between products and tags.

// // Each of these functions is defined in separate files (e.g., category-seeds.js, product-seeds.js, etc.).


const sequelize = require('../config/connection');
// // 2.	Import Database Connection
// // •	Imports the Sequelize database connection instance from ../config/connection.js.

// // Main Seeding Function
const seedAll = async () => {
  // // 3.	Define seedAll Function
	// // •	An asynchronous function that performs the seeding tasks in sequence.

  // // Step 1: Sync Database
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
	// // •	sequelize.sync({ force: true }):
	// // •	Drops all existing tables and recreates them based on the model definitions.
	// // •	force: true ensures the database tables are dropped and recreated.
	// // •	Log: Prints a message indicating the database has been synced.

  // // Step 2: Seed Categories
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
	// // •	await seedCategories(): Calls the seedCategories function to insert category data into the Category table.
	// // •	Log: Prints a message indicating that categories have been seeded.

  // // Step 3: Seed Products
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
	// // •	await seedProducts(): Calls the seedProducts function to insert product data into the Product table.
	// // •	Log: Prints a message indicating that products have been seeded.

  // // Step 4: Seed Tags
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  // // •	await seedTags(): Calls the seedTags function to insert tag data into the Tag table.
	// // •	Log: Prints a message indicating that tags have been seeded.

  // // Step 5: Seed Product-Tag Relationships
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');
	// // •	await seedProductTags(): Calls the seedProductTags function to insert data into the ProductTag table, establishing relationships between products and tags.
	// // •	Log: Prints a message indicating that product-tag relationships have been seeded.

  // // Exit Process
  process.exit(0);
};
// // •	Purpose: Exits the Node.js process with a success code (0) after all seeding tasks are complete.

// // Invoke the Seeding Function
seedAll();
// // •	Calls the seedAll function to begin the seeding process.

// // Summary of Workflow
// // 	1.	Database Sync:
// // 	•	Drops and recreates tables.
// // 	2.	Seeding Steps:
// // 	•	Seed categories.
// // 	•	Seed products.
// // 	•	Seed tags.
// // 	•	Seed product-tag relationships.
// // 	3.	Logging:
// // 	•	Logs messages to indicate progress at each step.
// // 	4.	Exit:
// // 	•	Exits the process when seeding is complete.

// // How to Run the Seeding Script

// // 1.	Ensure Dependencies are Installed:
// // npm install

// // 2.	Run the Script:
// // node seedAll.js

// // This script will populate your database with initial data, making it easier to test and develop your application.