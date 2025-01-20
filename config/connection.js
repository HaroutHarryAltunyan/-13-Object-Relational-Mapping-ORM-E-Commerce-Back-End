// origins: starter code {keep code}
// // 1. Load Environment Variables
require('dotenv').config();
// // •	Purpose: Loads the .env file and makes the environment variables defined in it accessible through process.env.
// // •	Usage: Allows sensitive information (like database credentials) to be stored securely outside of the codebase.

// // 2. Import Sequelize
const Sequelize = require('sequelize');
// // •	Purpose: Imports the Sequelize library, which is an ORM (Object-Relational Mapper) for managing SQL databases.
// // •	Usage: Sequelize provides an interface for interacting with a database in a programmatic way (like defining models and running queries).

// // 3. Initialize the Sequelize Instance
const sequelize = process.env.DB_URL
// // •	If process.env.DB_URL is set:
  ? new Sequelize(process.env.DB_URL)
// // •	Purpose: Connects to the database using a single URL string (e.g., postgres://user:password@localhost:5432/dbname).
// // •	Common Usage: Useful in environments like cloud services (Heroku, AWS) where a full connection string is provided.  
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
  //  // •	process.env.DB_NAME: The name of the database.
  //  // •	process.env.DB_USER: The database user.
  //  // •	process.env.DB_PASSWORD: The user’s password.
  //  // •	Configuration Object:
  //  // •	host: 'localhost': Specifies that the database is hosted locally.
  //  // •	dialect: 'postgres': Indicates that PostgreSQL is the database type.
  //  // •	dialectOptions:
  //  // •	decimalNumbers: true: Ensures that decimal numbers are returned as JavaScript numbers rather than strings (specific to some database drivers).    
// // ^This block (3.) initializes the Sequelize connection based on whether a DB_URL environment variable is provided.

// // 4. Export the Sequelize Instance
module.exports = sequelize;
// // •	Purpose: Exports the configured sequelize instance so it can be used in other parts of the application.
// // •	Usage: Allows importing the database connection into models or other files that interact with the database.


// // Summary of Code Functionality

// // This script configures a Sequelize connection to a PostgreSQL database. 
// // It supports connecting via a full database URL or using individual credentials 
// // (database name, user, password). By exporting the sequelize instance, 
// // it makes the connection available for use in defining models and executing 
// // database operations.







// require('dotenv').config();
// const Sequelize = require('sequelize');

// const sequelize = process.env.DB_URL
//   ? new Sequelize(process.env.DB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: process.env.DB_HOST || 'localhost',
//       port: process.env.DB_PORT || 5432,
//       dialect: 'postgres',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// sequelize
//   .authenticate()
//   .then(() => console.log('Connection to database successful.'))
//   .catch((err) => console.error('Unable to connect to database:', err));

// module.exports = sequelize;