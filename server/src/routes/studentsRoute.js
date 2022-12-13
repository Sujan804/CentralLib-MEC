const loginController = require('../controllers/studentsController')
const express = require('express')
const router = express.Router()

router.post('/login', loginController)

module.exports = router;