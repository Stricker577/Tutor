const express = require('express');
const passport = require('passport');
const app = express();

exports.login = passport.authenticate('google', { scope: ['profile', 'email'] }); 
/*
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, print user details
        console.log('User profile:', req.user.profile);
        console.log('User email:', req.user.email);
        // You can also send user details as a response
        res.send(req.user);
    }
);
*/
app.listen(3000, () => console.log('Server started on port 3000'));

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