const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Session = require('../models/Session');

exports.loginPage = (req, res, next) => {
	if(res.locals.isAuthenticated){
		res.redirect('/');
	} else {
		res.render('login',{layout: 'login_layout', loginPage: true, pageTitle: 'Login'});
	}
};

exports.login = (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.inputEmail
		}
	}).then(user => {
		console.log(req.body.inputPassword);
		console.log(user);
		if(user) {
			bcrypt
				.compare(req.body.inputPassword, user.password)
				.then(doMatch => {
					console.log(doMatch);
					if (doMatch) {
						req.session.isLoggedIn = true;
			            req.session.user = user.dataValues;
			            return req.session.save(err => {
							console.log(err);
							res.redirect('/');
			            });
					}
					req.flash('error', 'Invalid email or password.');
					res.redirect('/login');
				})
				.catch(err => {
					console.log(err);
					req.flash('error', 'Sorry! Somethig went wrong.'+err);
					res.redirect('/login');
				});
		} else {
			req.flash('error', 'No user found with this email');
			return res.redirect('/login');
		}
	})
	.catch(err => console.log(err));
};

exports.logout = (req, res, next) => {
	if(res.locals.isAuthenticated){
		req.session.destroy(err => {
			console.log(err);
			return res.redirect('/');
		});
	} else {
		return res.redirect('/login');
	}
};

exports.signUpPage = (req, res, next) => {
	res.render('sign_up',{layout: 'login_layout', signUpPage: true});
};

exports.signUp = (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email
		}
	}).then(user => {
		if(!user) {
			return bcrypt
					.hash(req.body.password, 12)
					.then(hashedPassword => {
						const user = new User({
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							email: req.body.email,
							password: hashedPassword,
						});
						return user.save();
					})
					.then(result => {
						res.redirect('/login');
					});
		} else {
			req.flash('error', 'E-Mail exists already, please pick a different one.');
        	return res.redirect('/signup');
		}
	})
	.catch(err => console.log(err));
};