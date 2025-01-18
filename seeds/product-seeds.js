// // Let’s break down the seedProducts script, which seeds the Product model with initial data. This script is typically used to populate the database with sample product data for testing or development purposes.

// // Code Breakdown
const { Product } = require('../models');
// // 1.	Import Product Model
// // •	Imports the Product model from the models directory.
// // •	Usage: Allows interaction with the Product table in the database.

// // Seed Data
const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];
// // 2.	Define productData Array
// // •	Purpose: Contains an array of product objects, each with the following properties:
// // •	product_name: Name of the product.
// // •	price: Price of the product (as a decimal number).
// // •	stock: Number of items in stock.
// // •	category_id: Foreign key referencing the Category model.

// // Example Data in the Array:

// // product_name                              price	  stock	  category_id
// // Plain T-Shirt	                            14.99	  14	    1
// // Running Sneakers	                        90.00	  25	    5
// // Branded Baseball Hat	                    22.99	  12	    4
// // Top 40 Music Compilation Vinyl Record	    12.99	  50	    3
// // Cargo Shorts	                            29.99	  22	    2

// // Seeding Function
const seedProducts = () => Product.bulkCreate(productData);
// // 3.	Define seedProducts Function
// // •	Product.bulkCreate(productData): Uses the bulkCreate method to insert multiple records into the Product table in one operation.
// // •	Efficiency: bulkCreate is efficient for inserting multiple rows at once, reducing the number of database calls.

module.exports = seedProducts;
// // 4.	Export seedProducts Function
// // •	Purpose: Allows this function to be imported and executed in the main seeding script (e.g., seedAll.js).

// // How to Use This Script
// // 	1.	Include it in seedAll.js:
// // const seedProducts = require('./product-seeds');

// // await seedProducts();
// // console.log('\n----- PRODUCTS SEEDED -----\n');

// // 2.	Run the Seeding Script:
// // node seedAll.js

// // Summary
// // 	•	Purpose: Seeds the Product table with predefined product data.
// // 	•	Method: Uses Product.bulkCreate() to insert data efficiently.
// // 	•	Reusability: The function can be reused whenever you need to reset or populate the Product table with initial data.

// // This script helps populate the database quickly, making it useful for testing and development environments.