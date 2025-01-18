const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

// // Let’s complete the category-routes.js file by implementing the route handlers for each endpoint. These routes interact with the Category and Product models and handle CRUD operations. We’ll also include error handling to manage potential issues.

// // Completed Code for category-routes.js
// const router = require('express').Router();
// const { Category, Product } = require('../../models');

// // The `/api/categories` endpoint

// // GET all categories with their associated Products
// router.get('/', async (req, res) => {
//   try {
//     const categories = await Category.findAll({
//       include: [{ model: Product }],
//     });
//     res.json(categories);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching categories', error: err });
//   }
// });

// // GET a single category by its `id` with associated Products
// router.get('/:id', async (req, res) => {
//   try {
//     const category = await Category.findByPk(req.params.id, {
//       include: [{ model: Product }],
//     });

//     if (!category) {
//       return res.status(404).json({ message: 'No category found with that ID' });
//     }

//     res.json(category);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching category', error: err });
//   }
// });

// // POST a new category
// router.post('/', async (req, res) => {
//   try {
//     const newCategory = await Category.create({
//       category_name: req.body.category_name,
//     });
//     res.status(201).json(newCategory);
//   } catch (err) {
//     res.status(500).json({ message: 'Error creating category', error: err });
//   }
// });

// // PUT to update a category by its `id` value
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedCategory = await Category.update(
//       { category_name: req.body.category_name },
//       { where: { id: req.params.id } }
//     );

//     if (!updatedCategory[0]) {
//       return res.status(404).json({ message: 'No category found with that ID' });
//     }

//     res.json({ message: 'Category updated successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error updating category', error: err });
//   }
// });

// // DELETE a category by its `id` value
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedCategory = await Category.destroy({
//       where: { id: req.params.id },
//     });

//     if (!deletedCategory) {
//       return res.status(404).json({ message: 'No category found with that ID' });
//     }

//     res.json({ message: 'Category deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error deleting category', error: err });
//   }
// });

// module.exports = router;


// Explanation of Each Route
// //	1.	GET /api/categories/
// 	•	Fetches all categories and includes their associated products.
// //	2.	GET /api/categories/:id
// 	•	Fetches a single category by its id and includes associated products.
// 	•	Returns a 404 error if the category is not found.
// //	3.	POST /api/categories/
// 	•	Creates a new category using the data provided in the request body (category_name).
// 	•	Returns a 500 error if the creation fails.
// //	4.	PUT /api/categories/:id
// 	•	Updates an existing category’s category_name based on the id in the URL.
// 	•	Returns a 404 error if no category with the specified id is found.
// //	5.	DELETE /api/categories/:id
// 	•	Deletes a category based on the id in the URL.
// 	•	Returns a 404 error if no category with the specified id is found.

//   Additional Notes
// 	•	Error Handling: Each route has error handling to catch issues and return appropriate status codes and messages.
// 	•	Model Relationships: Ensure that the Category and Product models are correctly associated in the models/index.js file:

//   Category.hasMany(Product, { foreignKey: 'category_id' });
// Product.belongsTo(Category, { foreignKey: 'category_id' });

// •	Request Body Example for POST and PUT:
// {
//   "category_name": "Electronics"
// }

// This completes the implementation of the category-routes.js file with fully functional CRUD operations!

// Code Explanation

// const router = require('express').Router();
// const { Category, Product } = require('../../models');

// //1.	const router = require('express').Router();
// •	Purpose: Imports the Router function from Express and creates a new router instance.
// •	Usage: The router object will be used to define route handlers for different HTTP requests (e.g., GET, POST, PUT, DELETE).
// //2.	const { Category, Product } = require('../../models');
// •	Purpose: Imports the Category and Product models from the models directory.
// •	Usage: These models are used to interact with the categories and products tables in the database.

// Route Definitions
// //1. GET /api/categories/

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
// });

// •	Purpose: This route will handle GET requests to fetch all categories.
// •	Comment: Indicates that the response should include associated products for each category.

// //2. GET /api/categories/:id

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });

// •	Purpose: This route will handle GET requests to fetch a single category by its id.
// •	Comment: Indicates that the response should include associated products for the specified category.

// //3. POST /api/categories/

// router.post('/', (req, res) => {
//   // create a new category
// });

// •	Purpose: This route will handle POST requests to create a new category.
// •	Usage: The request body should contain the data needed to create the new category (e.g., category_name).

// //4. PUT /api/categories/:id

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// •	Purpose: This route will handle PUT requests to update a category by its id.
// •	Usage: The request body should contain the updated category data.

// //5. DELETE /api/categories/:id

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
// });

// •	Purpose: This route will handle DELETE requests to delete a category by its id.
// •	Usage: Deletes the specified category and possibly handles any cascading effects (e.g., removing related products).

// Export the Router

// module.exports = router;

// •	Purpose: Exports the router object so it can be imported and used in the main server file (e.g., server.js or index.js).
// •	Usage: Typically included in the route handling for api/categories.

// Summary

// This code sets up a set of routes for handling CRUD operations on the categories resource:
// //	1.	GET /api/categories/ - Retrieve all categories and their associated products.
// //	2.	GET /api/categories/:id - Retrieve a specific category by ID and its associated products.
// //	3.	POST /api/categories/ - Create a new category.
// //	4.	PUT /api/categories/:id - Update a category by ID.
// //	5.	DELETE /api/categories/:id - Delete a category by ID.

// These routes follow RESTful conventions and use the Category and Product models to interact with the database.