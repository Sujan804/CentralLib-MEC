const mongoose = require('mongoose')
require('dotenv').config()
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected successfully!!")
})
