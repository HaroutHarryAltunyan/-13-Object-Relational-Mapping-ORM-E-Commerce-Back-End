// const router = require('express').Router();
// const { Category, Product } = require('../../models');

// // The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });

// router.post('/', (req, res) => {
//   // create a new category
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
// });

// module.exports = router;

// // Category-routes.js file by implementing the route handlers for each endpoint. These routes interact with the Category and Product models and handle CRUD operations. 

// // Completed Code for category-routes.js
const router = require('express').Router();
const { Category, Product } = require('../../models');

// // The `/api/categories` endpoint

// GET all categories with their associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
});

// // GET a single category by its `id` with associated Products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!category) {
      return res.status(404).json({ message: 'No category found with that ID' });
    }

    res.json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching category', error: err });
  }
});

// // POST a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Error creating category', error: err });
  }
});

// // PUT to update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updatedCategory = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );

    if (!updatedCategory[0]) {
      return res.status(404).json({ message: 'No category found with that ID' });
    }

    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating category', error: err });
  }
});

// // DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });

    if (!deletedCategory) {
      return res.status(404).json({ message: 'No category found with that ID' });
    }

    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category', error: err });
  }
});

module.exports = router;


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