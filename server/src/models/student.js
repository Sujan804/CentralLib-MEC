const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name:  {
        type: String,
        trim: true
    },
    registration: {
        type: Number,
        trim: true
    },
    classRoll: {
        type: Number,
        trim:true
    },
    collegeId:{
        type:Number,
        trim: true,
    },
    batchNo: {
        type: String,
        trim: true,
    },
    department : {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true
    },
    password: {
        type:String,
        trim: true
    },
    image: {
        type: String,
        default: "",
        trim: true
    },
    joined: {
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Student",studentSchema )