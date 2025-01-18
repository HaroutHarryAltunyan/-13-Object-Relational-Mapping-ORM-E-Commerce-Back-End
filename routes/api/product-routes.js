// // Let’s break down the code in product-routes.js line by line. This file sets up the API endpoints for handling CRUD (Create, Read, Update, Delete) operations for Product data, and it also manages associated data for Category and Tag models.
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');
// // 1.	const router = require('express').Router();
// // •	Purpose: Imports the Router function from Express to create a new router instance.
// // 2.	const { Product, Category, Tag, ProductTag } = require('../../models');
// // •	Purpose: Destructures and imports the Product, Category, Tag, and ProductTag models from the models directory.
// // •	Usage: These models are used to interact with the database tables and handle related data.

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
});
// // •	Purpose: Sets up a GET endpoint to retrieve all products.
// // •	Comment: Indicates that the response should include associated Category and Tag data.


// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});
// // •	Purpose: Sets up a GET endpoint to retrieve a single product by its id.
// // •	Comment: Indicates that the response should include associated Category and Tag data.

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
// // Explanation
// // 	1.	Product.create(req.body)
// // 	•	Creates a new product using the data from req.body.
// // 	2.	Check for tagIds
// // 	•	If tagIds are provided, create an array of objects representing the product-tag relationships for the ProductTag model.
// // 	3.	ProductTag.bulkCreate(productTagIdArr)
// // 	•	Bulk creates entries in the ProductTag table for the provided tags.
// // 	4.	Response
// // 	•	If successful, responds with the created product and associated tag IDs.
// // 	5.	Error Handling
// // 	•	Logs errors to the console and responds with a 400 status code.


// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        
        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // create filtered list of new tag_ids
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });

            // figure out which ones to remove
          const productTagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);
                  // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});
// // Explanation
// // 	1.	Product.update(req.body, { where: { id: req.params.id } })
// // 	•	Updates the product with the data provided in req.body where the id matches req.params.id.
// // 	2.	Update Tags
// // 	•	If tagIds are provided:
// // 	•	Fetch existing ProductTag entries for the product.
// // 	•	Determine which tags need to be added or removed.
// // 	3.	Promise.all
// // 	•	Performs two actions in parallel:
// // 	•	Remove tags that are no longer associated with the product.
// // 	•	Add new tags that are not currently associated.
// // 	4.	Response
// // 	•	Responds with the updated product or errors with a 400 status code.

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
});
// // •	Purpose: Sets up a DELETE endpoint to remove a product by its id.
// // •	Comment: Indicates that the implementation should delete the product and handle any associated data if necessary.

// // Export the Router
module.exports = router;
// //•	Purpose: Exports the router so it can be used in the main API routing file (e.g., index.js).

// // Summary of Endpoints
// // 	1.	GET /api/products
// // 	•	Retrieve all products with associated categories and tags.
// // 	2.	GET /api/products/:id
// // 	•	Retrieve a single product by ID with associated categories and tags.
// // 	3.	POST /api/products
// // 	•	Create a new product, optionally with associated tags.
// // 	4.	PUT /api/products/:id
// // 	•	Update an existing product and its associated tags.
// // 	5.	DELETE /api/products/:id
// // 	•	Delete a product by ID (not fully implemented in the provided code).

// // This structure follows RESTful conventions and ensures efficient management of products and their associations with categories and tags.