// // Let’s break down this router configuration line by line. This code is typically found in an index.js file within the routes/api directory, and it acts as a central hub for routing API endpoints related to categories, products, and tags.
// // Code Breakdown
const router = require('express').Router();
// // •	Purpose: Imports the Router function from the Express library and creates a new router instance.
// // •	Usage: The router instance is used to group and organize different route modules.

// // Import Route Modules
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
// // •	categoryRoutes: Imports the routes for handling category-related API endpoints from category-routes.js.
// // •	productRoutes: Imports the routes for handling product-related API endpoints from product-routes.js.
// // •	tagRoutes: Imports the routes for handling tag-related API endpoints from tag-routes.js.

// // These files typically contain CRUD operations (Create, Read, Update, Delete) for their respective resources.

// // Set Up Route Handlers
router.use('/categories', categoryRoutes);
// // •	Purpose: When a request comes in with a path starting with /categories, it is directed to the categoryRoutes.
// // •	Example Endpoints:
// // •	GET /api/categories
// // •	GET /api/categories/:id
// // •	POST /api/categories

router.use('/products', productRoutes);
// // •	Purpose: When a request comes in with a path starting with /products, it is directed to the productRoutes.
// // •	Example Endpoints:
// // •	GET /api/products
// // •	GET /api/products/:id
// // •	POST /api/products

router.use('/tags', tagRoutes);
// // •	Purpose: When a request comes in with a path starting with /tags, it is directed to the tagRoutes.
// // •	Example Endpoints:
// // •	GET /api/tags
// // •	GET /api/tags/:id
// // •	POST /api/tags

// // Export the Router
module.exports = router;
// // •	Purpose: Exports the router so it can be imported and used in the main server file (e.g., server.js or index.js).
// // •	Usage: Typically included in the server setup as part of a route configuration like:

// // const apiRoutes = require('./routes/api');
// // app.use('/api', apiRoutes);

// // Summary of Functionality
// // 	1.	Centralized Routing: This file consolidates routes for categories, products, and tags, making the code modular and organized.
// // 	2.	Express Middleware: The router.use method acts as middleware to delegate requests to the appropriate route module.
// // 	3.	RESTful Structure: Routes are organized according to RESTful principles, handling different HTTP methods (GET, POST, PUT, DELETE).

// // When this router is mounted at /api, the full paths become:
// // 	•	/api/categories → Handled by categoryRoutes
// // 	•	/api/products → Handled by productRoutes
// // 	•	/api/tags → Handled by tagRoutes

// // This approach keeps your codebase clean, organized, and scalable.