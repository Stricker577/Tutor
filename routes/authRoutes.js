const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', (req, res) => {
    res.send('test');
});
/*
router.get('/auth/google', authController.login);

router.get('/auth/google/callback', authController.googleCallback);

router.get('/logout', authController.logout);
*/
module.exports = router;