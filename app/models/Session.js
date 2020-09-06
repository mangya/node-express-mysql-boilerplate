
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../../config/database');

const Session = sequelize.define("sessions", {
	sid: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	userId: DataTypes.STRING,
	expires: DataTypes.DATE,
	data: DataTypes.TEXT,
});

module.exports = Session;