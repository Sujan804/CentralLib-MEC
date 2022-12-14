const express = require('express')
const passport = require('passport')
const {register,login, profile,logout} = require('../controller/authController')

const router = express.Router()

router.post('/register', register )
router.post('/login',login)
router.get('/profile',passport.authenticate("jwt",{session:false}), profile)
router.post('/logout',logout)

module.exports = router