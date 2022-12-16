const {adminSignUp, adminLogin} = require('../controllers/auth')

const express = require('express');
const router = express.Router();

router.post('/signup', adminSignUp)
router.post('/login', adminLogin)

module.exports = router