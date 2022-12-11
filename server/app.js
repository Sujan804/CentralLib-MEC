const express = require('express')
const env = require('dotenv')
const app =  express()
const connectDatabase = require('./src/database/connect')
const studentRoute = require('./src/routes/student/studentRoute')
env.config()

app.use(express.json())

connectDatabase()
app.get('/',(req,res)=>{
    console.log("Hello World")
    res.status(200).json({
        "message": "hello world"
    })
})
app.use('/admin',studentRoute)
console.log(process.env.MONGO_URL)
app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})
