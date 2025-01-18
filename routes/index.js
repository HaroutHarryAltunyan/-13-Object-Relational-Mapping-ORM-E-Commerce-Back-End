// // Let’s break down this index.js file, which serves as the central router configuration for your Express application. This file is typically located in the routes directory and helps manage all incoming API requests.
const router = require('express').Router();
const apiRoutes = require('./api');
// // 1.	const router = require('express').Router();
// // •	Purpose: Imports the Router function from the Express library and creates a new router instance.
// // •	Usage: The router object will manage routes for the application.
// // 2.	const apiRoutes = require('./api');
// // •	Purpose: Imports the apiRoutes from the api directory (i.e., ./api/index.js).
// // •	Usage: This apiRoutes object contains all the API-related routes (e.g., categories, products, tags).

// // Mount API Routes
router.use('/api', apiRoutes);
// // •	Purpose: Mounts all the routes from apiRoutes under the /api path.
// // •	Example Requests:
// // •	GET /api/categories
// // •	GET /api/products
// // •	GET /api/tags
// // •	When a request starts with /api, it will be forwarded to the apiRoutes for further handling.

// // Fallback Route for Incorrect Paths
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});
// // •	Purpose: A catch-all route for handling any requests that don’t match defined routes.
// // •	Usage: If a user tries to access a route that isn’t defined, this middleware will respond with a simple HTML message: "Wrong Route!".
// // •	Example:
// // •	If the user accesses /random-path, they will see the message <h1>Wrong Route!</h1>.

module.exports = router;
// // •	Purpose: Exports the router so it can be imported and used in the main server file (e.g., server.js).
// // •	Usage: Typically mounted in server.js like this:
// // const routes = require('./routes');
// // app.use(routes);

// // Summary of Functionality
// // 	1.	Route Management:
// // 	•	All API routes are prefixed with /api and handled by apiRoutes.
// // 	2.	Fallback Handling:
// // 	•	Provides a simple response for any undefined routes to inform the user they’ve accessed the wrong route.
// // 	3.	Modular Design:
// // 	•	Keeps the route configuration organized and modular by separating API routes into the api directory.

// // This structure makes it easy to manage and expand your routes as your application grows.