const express = require('express')
const env = require('dotenv')
const app = express();
const adminRoute = require('./routes/admin')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

// env configuration
env.config();
app.use(cors())
app.use(express.json())
app.use(bodyParser())
/// Database connection

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongoDB connected")
})
.catch((err)=>{
    console.log(err)
})



// Routes
app.use('/admin', adminRoute)
app.get('/', (req,res,next)=>{
    console.log(`Hi from client`)
    res.send('<h1 style="color:white; text-align:center; padding:5px; background-color: green; border-radius: 20px; margin-top: 30px">Hi from client</h1>')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})