const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('users', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
		fullName: Sequelize.STRING,
		email: {
			type: Sequelize.STRING,
			allowNull: false
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
  	},
	{
	indexes: [
		// Create a unique index on email
		{
			unique: true,
			fields: ['email']
		}],
	});

module.exports = User;