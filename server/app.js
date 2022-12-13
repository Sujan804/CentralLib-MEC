const express = require('express')
const cors = require('cors')
const auth = require('./src/routes/authRouter')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require('./src/db/database')

app.use('/', auth)

const PORT  = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}/`)
})
