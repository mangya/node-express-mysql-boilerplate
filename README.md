# Node Web Application boilerplate

A boilerplate for **Node.js** web applications. This boilerplate gives the basic stucture of application start with while bundling enough useful features so as to remove all those redundant tasks that can derail a project before it even really gets started. This boilerplate users Express with sequelize as ORM and MySQL as database.

### Prerequisites

1. ```NodeJs```
2. ```NPM```
3. ```MySQL```

### Quick start

1. Clone the repository with `git clone https://github.com/mangya/node-express-mysql-boilerplate.git <your_project_folder_name>`
2. Change directory to your project folder `cd <your_project_folder_name>`
3. Install the dependencies with `npm install`
4. Create database in MySQL.
5. Update the your database name and credentials in the `.env` file.
6. Run the application with `npm start` (MySQL service should be up and running).
7. Access `http://localhost:3000` and you're ready to go!

### Folder Structure
```
.
├── app/
│   ├── controllers/           # Controllers
│   ├── middlewares/           # Middlewares
│   ├── models/                # Express database models
├── config/
├── public/                    
│   ├── css/                   # Stylesheets
│   ├── js/                     
│	├── fonts/                 
│   ├── images/
├── .env                       # API keys, passwords, and other sensitive information
├── routes/                    # Route definitions
├── views/                     # All view files
├── index.js                   # Express application
└── package.json               # NPM Dependencies and scripts
```

## Packages used
* [nodemon](https://github.com/remy/nodemon) — tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — encryption library to hash a password
* [body-parser](https://github.com/expressjs/body-parser) — Node.js body parsing middleware. Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
* [express-flash](https://github.com/RGBboy/express-flash) — middleware to store flash messages in the session.
* [connect-session-sequelize](https://github.com/mweibel/connect-session-sequelize) — SQL session store using Sequelize.js
* [csurf](https://github.com/expressjs/csurf) — Middleware for CSRF token creation and validation. Requires session middleware to be initialized first. We have used `express-session`
* [dotenv](https://github.com/motdotla/dotenv) — module to load environment variables from a .env file
* [express](https://github.com/visionmedia/express) — web application framework for node
* [express-handlebars](https://github.com/express-handlebars/express-handlebars) — Template engine
* [express-session](https://github.com/expressjs/session) — Module to create a session middleware. Required for `csurf`.
* [validator](https://github.com/validatorjs/validator.js) — A library of string validators and sanitizers.
* [mysql2](https://github.com/sidorares/node-mysql2) — MySQL client for Node.js. Required for Sequelize. 
* [sequelize](https://github.com/sequelize/sequelize) — Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

## Readings
* [How to Architect a Node.Js Project](https://dev.to/shadid12/how-to-architect-a-node-js-project-from-ground-up-1n22)

## Contributing

This boilerplate is open to suggestions and contributions, documentation contributions are also welcome! 😊