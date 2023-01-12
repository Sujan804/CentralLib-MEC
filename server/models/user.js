const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        // require: true
    },
    registration:{
        type: String,
        // unique: true,
        trim: true,
        default: null
    },
    collegeId:{
        type: String,
        trim: true,
        // unique: true,
        require: true
    },
    batchNo:{
        type: String,
        trim: true,
        default: null
    },
    department:{
        type: String,
        trim: true,
        default: null
    },
    email:{
        type: String,
        trim: true,
        // require: true,
    },
    phone:{
        type: String,
        trim:true,
        // unique: true,
        default:null
    },
    password: {
        type: String,
        trim:true,
        // require: true
    },
    joined: {
        type: Date,
        default: Date.now()
    },
    image:{
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("User",userSchema);