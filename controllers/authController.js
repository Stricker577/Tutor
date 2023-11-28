//unused code?

const express = require('express');
const passport = require('passport');
const app = express();

exports.login = passport.authenticate('google', { scope: ['profile', 'email'] }); 

exports.googleCallback = (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/auth/google/failure');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log("Logged in user:", user); // Log the user object
      return res.redirect('/home_page');
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};