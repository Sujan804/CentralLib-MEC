const {adminSignUp, adminLogin} = require('../controllers/auth')
const { adminHome } = require('../controllers/admin');
const {checkAuthenticated} = require('../config/checkLoggedIn')
const express = require('express');
const passport = require('passport');
const router = express.Router();
router.get('/', checkAuthenticated, adminHome)
router.post('/signup', adminSignUp)
router.post('/login', adminLogin)

module.exports = router