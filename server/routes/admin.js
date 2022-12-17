const {adminSignUp, adminLogin} = require('../controllers/auth')
const passport = require('passport')
const express = require('express');
const { AdminDash } = require('../controllers/admin');
const router = express.Router();

router.get('/', passport.authenticate('jwt',{session: false}), AdminDash)
router.post('/signup', adminSignUp)
router.post('/login', adminLogin)

module.exports = router