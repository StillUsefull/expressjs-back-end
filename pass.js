const Passport = require('passport');
const localStategy = require('passport-local').Strategy;
const User = require('./models/user');

exports.local = Passport.use(new localStategy(User.authenticate()));

Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

