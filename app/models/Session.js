
const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const Session = sequelize.define("sessions", {
	sid: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	userId: Sequelize.STRING,
	expires: Sequelize.DATE,
	data: Sequelize.TEXT,
});

module.exports = Session;