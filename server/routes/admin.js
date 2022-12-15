const {adminSignUp} = require('../controllers/auth')

const express = require('express');
const router = express.Router();

router.post('/signup', adminSignUp)

module.exports = router