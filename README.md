# Node Web Application boilerplate

A boilerplate for **Node.js** web applications. This boilerplate gives the basic stucture of application start with while bundling enough useful features so as to remove all those redundant tasks that can derail a project before it even really gets started. This boilerplate users Express with sequelize as ORM and MySQL as database.

### Prerequisites

1. ```NodeJs```
2. ```NPM```
3. ```MySQL```

### Features

### Quick start

_Notice that the boilerplate comes with a small application for user management already, you can delete it with a npm script after you understand how the boilerplate works but please do the quick start first!_ 😊

1. Clone the repository with `git clone https://github.com/talyssonoc/node-api-boilerplate`
2. Setup the database on `config/database.js` (there's an example file there to be used with MySQL 😉 )
3. Install the dependencies with `npm`
4. Create the development and test databases you have setup on `config/database.js`
5. Run the database migrations with `npm run sequelize db:migrate`
6. Add some seed data to the development database with `npm run sequelize db:seed:all`
7. Run the application in development mode with `npm run dev`
8. Access `http://localhost:3000/api/users` and you're ready to go!

## Tech

- [Node v7.6+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Structure](https://www.npmjs.com/package/structure)
- [HTTP Status](https://www.npmjs.com/package/http-status)
- [Log4js](https://www.npmjs.com/package/log4js)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Status Monitor](https://www.npmjs.com/package/express-status-monitor)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PM2](https://www.npmjs.com/package/pm2)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [FactoryGirl](https://www.npmjs.com/package/factory-girl)
- [Istanbul](https://www.npmjs.com/package/istanbul) + [NYC](https://www.npmjs.com/package/nyc)
- [ESLint](https://www.npmjs.com/package/eslint)

## Contributing

This boilerplate is open to suggestions and contributions, documentation contributions are also welcome! :)