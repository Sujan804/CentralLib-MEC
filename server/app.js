const express = require('express')
const cors = require('cors')
const auth = require('./src/routes/authRouter')
const app = express()
const passport = require('passport')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())

require("./src/config/passport")
require('./src/db/database')
require('dotenv').config()
app.use('/', auth)
const PORT  = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}/`)
})
