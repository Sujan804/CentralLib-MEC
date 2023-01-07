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
const userRoute = require('./routes/userRoute')

// env configuration
env.config();
app.use(cors())
app.use(express.json())
app.use(bodyParser())
app.use(express.static(`${__dirname}` + `\\public\\`));
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


console.log(__dirname+'/public')
// Routes
app.use('/admin', adminRoute)
app.use('/book',bookRoute)
app.use('/user', userRoute)
app.use("/image" ,express.static("/images"))
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`${__dirname}` + `\\public\\`)
    console.log(`Server is running on http://localhost:${PORT}`)
})