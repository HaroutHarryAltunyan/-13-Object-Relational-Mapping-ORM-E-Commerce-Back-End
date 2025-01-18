// // Let’s break down the seedTags.js script, which seeds the Tag model with initial data. This script is typically used to populate the database with sample tags for testing or development purposes.
const { Tag } = require('../models');
// // 1.	Import Tag Model
// // •	Purpose: Imports the Tag model from the models directory.
// // •	Usage: Allows interaction with the Tag table in the database.

// // Seed Data: 
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// // 2.	Define tagData Array
// // •	Purpose: Contains an array of objects, each representing a tag with a tag_name property.
// // •	Structure: Each object has the following field:
// // •	tag_name: The name of the tag.

// // Example Data in the Array:
// tag_name
// rock music
// pop music
// blue
// red
// green
// white
// gold
// pop culture

// // Seeding Function
const seedTags = () => Tag.bulkCreate(tagData);
// 3.	Define seedTags Function
// •	Tag.bulkCreate(tagData):
// •	Uses the bulkCreate method to insert multiple records into the Tag table in a single operation.
// •	Efficiency: bulkCreate is efficient for batch insertion, reducing the number of database calls.


// // Export the Function
module.exports = seedTags;
// 4.	Export seedTags Function
// •	Purpose: Exports the seedTags function so it can be imported and executed in the main seeding script (e.g., seedAll.js).

// // How to Use This Script
// 	1.	Include it in seedAll.js:
// const seedTags = require('./tag-seeds');

// await seedTags();
// console.log('\n----- TAGS SEEDED -----\n');

// 2.	Run the Seeding Script:
// node seedAll.js

// // Summary
// 	•	Purpose: Seeds the Tag table with predefined tag data.
// 	•	Method: Uses Tag.bulkCreate() to efficiently insert multiple tags.
// 	•	Data: Contains various tag names (e.g., colors, music genres, and culture-related tags).
// 	•	Reusability: The function can be reused whenever you need to reset or populate the Tag table.

// This script helps populate the database quickly, making it useful for testing and development environments where tag data is needed.