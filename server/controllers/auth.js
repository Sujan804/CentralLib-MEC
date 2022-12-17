const jwt = require('jsonwebtoken')
const User = require("../models/user")
require('dotenv').config()
const adminSignUp = async (req,res,next)=>{
    try{
       
        const newAdmin = new User({
            ...req.body
        })
        console.log(req.body)
        await newAdmin.save()
        .then(()=>{
            res.status(200).send({
                success: true,
                message: "Admin successfully added"
            })
        }).catch((err)=>{
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }catch(err){
        res.status(500).send({
            success: false,
            message: err.message
        })
    }
    
}

const adminLogin = async (req,res,next)=>{
    console.log("Hello from login")
    try {
        const {collegeId,password} = req.body
        console.log(collegeId)
        console.log(password)
        const user = await User.findOne({collegeId: collegeId});
        if(!user){
            res.status(404).send({
                success: false,
                message: "User not found",
            })
        }else{
            if(user.password === password){
                
                const payload = {
                    collegeId : user.collegeId,
                }
                const token = jwt.sign(payload, process.env.SECRET_KEY,{
                    expiresIn : '2h'
                })
                res.status(200).send({
                    success: true,
                    message: "User is logged in successfully",
                    token: "Bearer "+ token
                })
            }else{
                res.status(403).send({
                    success: false,
                    message: "Incorrect password!"
                })
            }
        }
      
    } catch (error) {
        res.status(403).send({
            success: false,
            message: "Server Error!"
        })
    }
}
module.exports = {adminSignUp, adminLogin}