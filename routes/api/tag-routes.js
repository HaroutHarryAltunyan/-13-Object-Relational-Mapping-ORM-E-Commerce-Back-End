// // Let’s break down this tag-routes.js file and complete each route for handling CRUD operations related to Tag data. This file sets up API endpoints for managing tags and their associations with products.
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
// // 1.	const router = require('express').Router();
// // •	Creates an instance of an Express router to handle the routing for /api/tags endpoints.
// // 2.	const { Tag, Product, ProductTag } = require('../../models');
// // •	Imports the Tag, Product, and ProductTag models.
// // •	These models are used to interact with the database tables.

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

// // 1. GET All Tags
// // router.get('/', async (req, res) => {
// //   // find all tags
// //   // be sure to include its associated Product data
// //   try {
// //     const tags = await Tag.findAll({
// //       include: [{ model: Product }],
// //     });
// //     res.status(200).json(tags);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error retrieving tags', error: err });
// //   }
// // });
// // •	Purpose: Fetch all tags from the database and include associated products.
// // •	include: [{ model: Product }]: Ensures that each tag’s associated products are included in the response.


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

// // 2. GET a Single Tag by ID
// // router.get('/:id', async (req, res) => {
// //   // find a single tag by its `id`
// //   // be sure to include its associated Product data
// //   try {
// //     const tag = await Tag.findByPk(req.params.id, {
// //       include: [{ model: Product }],
// //     });

// //     if (!tag) {
// //       return res.status(404).json({ message: 'No tag found with that ID' });
// //     }

// //     res.status(200).json(tag);
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error retrieving the tag', error: err });
// //   }
// // });
// // •	Purpose: Fetch a single tag by its id and include associated products.
// // •	Error Handling: Returns a 404 status if no tag with the specified id is found.


router.post('/', (req, res) => {
  // create a new tag
});
// // 3. POST (Create a New Tag)
// // router.post('/', async (req, res) => {
// //   // create a new tag
// //   try {
// //     const newTag = await Tag.create({
// //       tag_name: req.body.tag_name,
// //     });
// //     res.status(201).json(newTag);
// //  } catch (err) {
// //    res.status(500).json({ message: 'Error creating the tag', error: err });
// //   }
// // });
// // •	Purpose: Create a new tag using the data in req.body.
// // •	Example Request Body:
// // {
// //  "tag_name": "New Tag"
// // }


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});
// // 4. PUT (Update a Tag by ID)
// // router.put('/:id', async (req, res) => {
// //   // update a tag's name by its `id` value
// //   try {
// //     const updatedTag = await Tag.update(
// //       { tag_name: req.body.tag_name },
// //       { where: { id: req.params.id } }
// //     );

// //     if (!updatedTag[0]) {
// //       return res.status(404).json({ message: 'No tag found with that ID' });
// //     }

// //     res.json({ message: 'Tag updated successfully' });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error updating the tag', error: err });
// //   }
// // });
// // •	Purpose: Update a tag’s name by its id.
// // •	Tag.update: Updates the tag_name field for the specified id.
// // •	Error Handling: Returns a 404 status if no tag is found with the given id.

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});
// // 5. DELETE (Delete a Tag by ID)
// // router.delete('/:id', async (req, res) => {
// //   // delete one tag by its `id` value
// //   try {
// //     const deletedTag = await Tag.destroy({
// //       where: { id: req.params.id },
// //     });

// //     if (!deletedTag) {
// //       return res.status(404).json({ message: 'No tag found with that ID' });
// //     }

// //     res.json({ message: 'Tag deleted successfully' });
// //   } catch (err) {
// //     res.status(500).json({ message: 'Error deleting the tag', error: err });
// //   }
// // });
// // •	Purpose: Delete a tag by its id.
// // •	Tag.destroy: Deletes the tag that matches the specified id.
// // •	Error Handling: Returns a 404 status if no tag is found with the given id.

// // Export the Router
module.exports = router;
// // •	Purpose: Exports the router so it can be used in the main API routing file (e.g., index.js).

// // Summary of Endpoints
// // 	1.	GET /api/tags
// // 	•	Fetch all tags and their associated products.
// // 	2.	GET /api/tags/:id
// // 	•	Fetch a specific tag by id and its associated products.
// // 	3.	POST /api/tags
// // 	•	Create a new tag.
// // 	4.	PUT /api/tags/:id
// // 	•	Update a tag’s name by id.
// // 	5.	DELETE /api/tags/:id
// // 	•	Delete a tag by id.

// // This structure follows RESTful conventions and ensures efficient management of tags and their associations with products.