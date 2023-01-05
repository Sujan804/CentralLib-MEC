const express = require('express')
const env = require('dotenv')
const app = express();
const adminRoute = require('./routes/admin')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const User = require('./models/user')
const bookRoute = require('./routes/bookRoute')

// env configuration
env.config();
app.use(cors())
app.use(express.json())
app.use(bodyParser())

//Pasport 


/// Database connection

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongoDB connected")
})
.catch((err)=>{
    console.log(err)
})
//



// Routes
app.use('/admin', adminRoute)
app.use('/book',bookRoute)
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})