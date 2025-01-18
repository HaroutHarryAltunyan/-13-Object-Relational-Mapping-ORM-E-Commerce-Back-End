// // Let’s break down the seedProductTags.js script, which seeds the ProductTag model with initial data. This script is typically used to create relationships between products and tags in a many-to-many relationship using a join table.
// // Code Breakdown
const { ProductTag } = require('../models');
// // 1.	Import ProductTag Model
// // •	Purpose: Imports the ProductTag model from the models directory.
// // •	Usage: Allows interaction with the ProductTag join table in the database, which links products and tags.

const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];

// // 2.	Define productTagData Array
// // •	Purpose: Contains an array of objects that link product_id and tag_id.
// // •	Structure:
// // •	product_id: The ID of the product.
// // •	tag_id: The ID of the tag.

// Example Data in the Array:
// product_id	tag_id
// 1	          6
// 1	          7
// 1	          8
// 2	          6
// 3	          1
// 3	          3
// 3	          4
// 3	          5
// 4	          1
// 4	          2
// 4	          8
// 5	          3

// // Seeding Function
const seedProductTags = () => ProductTag.bulkCreate(productTagData);
// // 3.	Define seedProductTags Function
// // •	ProductTag.bulkCreate(productTagData):
// // •	Uses the bulkCreate method to insert multiple records into the ProductTag table at once.
// // •	Efficiently establishes the relationships between products and tags in one database operation.

// // Export the Function
module.exports = seedProductTags;
// // 4.	Export seedProductTags Function
// // •	Purpose: Allows this function to be imported and executed in the main seeding script (e.g., seedAll.js).

// // How to Use This Script
// // 1.	Include it in seedAll.js:
// const seedProductTags = require('./product-tag-seeds');

// await seedProductTags();
// console.log('\n----- PRODUCT TAGS SEEDED -----\n');

// // 2.	Run the Seeding Script:
// // node seedAll.js

// // Summary
// // 	•	Purpose: Seeds the ProductTag table with predefined product-tag relationships.
// // 	•	Method: Uses bulkCreate for efficient batch insertion.
// // 	•	Data: Establishes many-to-many relationships between products and tags.
// // 	•	Reusability: The function can be reused whenever you need to reset or populate the ProductTag table.

// // This script is essential for setting up the relationships in a database where products can have multiple tags and tags can be associated with multiple products.