const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


// turn on connection to db and server from 13 miniproject 28
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




// require('dotenv').config();
// console.log('Database Credentials:', {
//   DB_NAME: process.env.DB_NAME,
//   DB_USER: process.env.DB_USER,
//   DB_PASSWORD: process.env.DB_PASSWORD,
//   DB_HOST: process.env.DB_HOST,
// });


// // // origins: starter code {keep code}
// // // 1. Import Express
// const express = require('express');
// // // •	Purpose: Imports the express framework, which is a web application framework for Node.js.
// // // •	Usage: express is used to create and configure the web server.

// // // 2. Import Routes
// const routes = require('./routes');
// // // •	Purpose: Imports the routes defined in the ./routes directory or file.
// // // •	Usage: These routes typically handle various API endpoints (e.g., /api/users, /api/posts).

// // //!!!!!!!!!!!!!!!!!!>
// // {TODO} import sequelize connection // // (TODO)
// const sequelize = require("./config/connection"); //double check this code do nott submit this code
// // // •	Purpose: Imports the Sequelize instance configured in the ./config/connection file.
// // // •	Usage: Allows you to interact with the database and synchronize models.


// // // 3. Initialize Express App
// const app = express();
// // // •	Purpose: Creates an instance of the Express application.
// // // •	Usage: The app object is used to configure the server, add middleware, and define routes.

// // // 4. Set the Server Port
// const PORT = process.env.PORT || 3001;
// // // •	Purpose: Sets the port number for the server.
// // // •	Details:
// // // •	process.env.PORT: If an environment variable PORT is defined (e.g., in a production environment), use that.
// // // •	3001: If PORT is not defined, default to 3001.

// // // 5. Middleware for Parsing JSON Requests
// app.use(express.json());
// // // •	Purpose: Parses incoming requests with JSON payloads.
// // // •	Usage: Allows the server to handle application/json content in request bodies.

// // // 6. Middleware for Parsing URL-Encoded Requests
// app.use(express.urlencoded({ extended: true }));
// // // •	Purpose: Parses incoming requests with URL-encoded payloads (form submissions).
// // // •	Details:
// // // •	{ extended: true }: Allows parsing of nested objects.

// // // 7. Use the Imported Routes
// app.use(routes);
// // // •	Purpose: Mounts the routes imported earlier onto the application.
// // // •	Usage: Any incoming request matching the defined routes will be handled accordingly (e.g., GET, POST requests).

// // //!!!!!!!!!!!!!!!!!!>
// // {TODO} sync sequelize models to the database, then turn on the server // // {TODO}
// sequelize.sync({ force: false }).then(() => { //double check this code do nott submit this code
// // // Explanation of sequelize.sync({ force: false })
// // // •	Purpose: Synchronizes all Sequelize models with the database.
// // // •	Details:
// // // •	{ force: false }:
// // // •	If set to true, it drops existing tables and recreates them (useful during development).
// // // •	If set to false, it preserves existing data and only creates tables if they don’t exist.


// // // 8. Start the Server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
//   });
// });
// // // •	Purpose: Starts the server and listens for incoming requests on the specified PORT.
// // // •	Callback: Logs a message to the console when the server is running successfully.


// // // Summary of Functionality

// // // This script sets up a basic Express server with:
// // // 	1.	Route Handling: Imports and applies predefined routes.
// // // 	2.	Middleware: Parses incoming JSON and form data.
// // // 	3.	Port Configuration: Runs on the port specified in the environment or defaults to 3001.
// // // 	4.	Server Startup: Listens for incoming requests and logs a message when the server is live.

// // // This structure is common in web applications to manage API endpoints and process client requests.









// // To complete Express application with Sequelize integration and routing:
// // 	1.	Importing and Syncing the Sequelize Connection.
// // 	2.	Setting Up Basic Routes.
// // 	3.	Defining a Simple Sequelize Model.
// // 	4.	Finalizing the Server Code.

// // Here’s the complete code with detailed comments.

// // 1. Sequelize Connection (config/connection.js)

// // Create a file to configure and export the Sequelize instance.
// // config/connection.js
// // require('dotenv').config();
// // const Sequelize = require('sequelize');

// // const sequelize = process.env.DB_URL
// //  ? new Sequelize(process.env.DB_URL)
// //  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
// //      host: 'localhost',
// //      dialect: 'postgres',
// //      dialectOptions: {
// //        decimalNumbers: true,
// //      },
// //    });

// // module.exports = sequelize;

// // 2. Define a Simple Model (models/User.js)
// // Create a User model as an example.
// models/User.js
// // const { Model, DataTypes } = require('sequelize');
// // const sequelize = require('../config/connection');

// // class User extends Model {}

// // User.init(
// //   {
// //     id: {
// //       type: DataTypes.INTEGER,
// //       primaryKey: true,
// //       autoIncrement: true,
// //     },
// //     name: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //     },
// //     email: {
// //       type: DataTypes.STRING,
// //       allowNull: false,
// //       unique: true,
// //       validate: {
// //         isEmail: true,
// //       },
// //     },
// //   },
// //   {
// //     sequelize,
// //     timestamps: false,
// //     modelName: 'user',
// //   }
// // );

// // module.exports = User;

// // 3. Create Routes (routes/index.js)

// // Add basic routes for interacting with the User model.

// // routes/index.js
// const router = require('express').Router();
// const User = require('../models/User');

// // GET all users
// // router.get('/users', async (req, res) => {
// //   try {
// //    const users = await User.findAll();
// //    res.json(users);
// //  } catch (err) {
// //    res.status(500).json({ error: err.message });
// //  }
// //});

// // POST a new user
// // router.post('/users', async (req, res) => {
// //   try {
// //   const { name, email } = req.body;
// //    const newUser = await User.create({ name, email });
// //    res.json(newUser);
// //  } catch (err) {
// //    res.status(500).json({ error: err.message });
// //  }
// //});

// //module.exports = router;

// // 4. Finalize the Server Code (server.js)

// // Add the Sequelize sync to your server setup.

// // server.js
// // const express = require('express');
// // const routes = require('./routes');
// // const sequelize = require('./config/connection'); // Import Sequelize connection

// // const app = express();
// // const PORT = process.env.PORT || 3001;

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.use(routes);

// // Sync sequelize models to the database, then turn on the server
// // sequelize.sync({ force: false }).then(() => {
// //  app.listen(PORT, () => {
// //    console.log(`App listening on port ${PORT}!`);
// //  });
// // });

// // 5. Environment Variables (.env)

// // Create a .env file to store database configuration:

// // DB_NAME=your_database_name
// // DB_USER=your_username
// // DB_PASSWORD=your_password
// // DB_URL= # Optional: full connection string (e.g., postgres://user:pass@localhost:5432/dbname)
// // PORT=3001

// // How the Code Works
// // 	1.	Sequelize Connection:
// // 	•	Configured in config/connection.js and imported where needed.
// // 	2.	Model:
// // 	•	The User model defines a simple user structure with id, name, and email.
// // 	3.	Routes:
// // 	•	Provides endpoints to get all users (GET /users) and create a new user (POST /users).
// // 	4.	Server:
// // 	•	Syncs models to the database and starts the Express server on the specified PORT.

// // Running the Application
// // 	1.	Install dependencies:
// // npm install express sequelize dotenv pg pg-hstore

// //   2.	Start the server:
// // node server.js

// // 3.	Test the routes:
// // •	GET all users: http://localhost:3001/users
// // •	POST a new user with JSON body:

// // This completes your Express server setup with Sequelize and basic CRUD routes! // //