const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Session = require('../models/Session');

const message = (req) => {
	let message = req.flash('error');
	if (message.length > 0) {
		message = message[0];
	} else {
		message = null;
	}

	return message;
}

const oldInput = (req) => {
	let oldInput = req.flash('oldInput');
	if (oldInput.length > 0) {
		oldInput = oldInput[0];
	} else {
		oldInput = null;
	}
	
	return oldInput;
}

exports.loginPage = (req, res, next) => {
	if(res.locals.isAuthenticated){
		res.redirect('/');
	} else {
		res.render('login',{layout: 'login_layout', loginPage: true, pageTitle: 'Login', errorMessage: message(req), oldInput: oldInput(req)});
	}
};

exports.login = (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.inputEmail
		}
	}).then(user => {
		if(user) {
			bcrypt
				.compare(req.body.inputPassword, user.password)
				.then(doMatch => {
					if (doMatch) {
						req.session.isLoggedIn = true;
			            req.session.user = user.dataValues;
			            return req.session.save(err => {
							console.log(err);
							res.redirect('/');
			            });
					}
					req.flash('error', 'Invalid email or password.');
					req.flash('oldInput',{email: req.body.inputEmail});
					return res.redirect('/login');
				})
				.catch(err => {
					console.log(err);
					req.flash('error', 'Sorry! Somethig went wrong.'+err);
					req.flash('oldInput',{email: req.body.inputEmail});
					return res.redirect('/login');
				});
		} else {
			req.flash('error', 'No user found with this email');
			req.flash('oldInput',{email: req.body.inputEmail});
			return res.redirect('/login');
		}
	})
	.catch(err => console.log(err));
};

exports.logout = (req, res, next) => {
	if(res.locals.isAuthenticated){
		req.session.destroy(err => {
			return res.redirect('/');
		});
	} else {
		return res.redirect('/login');
	}
};

exports.signUpPage = (req, res, next) => {
	res.render('sign_up',{layout: 'login_layout', signUpPage: true, errorMessage: message(req), oldInput: oldInput(req)});
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
							fullName: req.body.name,
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
			req.flash('oldInput',{name: req.body.name});
        	return res.redirect('/sign-up');
		}
	})
	.catch(err => console.log(err));
};

exports.forgotPasswordPage = (req, res, next) => {
	if(res.locals.isAuthenticated){
		res.redirect('/');
	} else {
		res.render('forgot_password',{layout: 'login_layout', loginPage: true, pageTitle: 'Forgot Password', errorMessage: message(req), oldInput: oldInput(req)});
	}
};