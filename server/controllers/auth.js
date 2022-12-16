const User = require("../models/user")
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
            res.status(403).send({
                success: false,
                message: "User not found",
            })
        }else{
            if(user.password === password){
                
                res.status(200).send({
                    success: true,
                    message: "User found on database",
                    user: {
                        ...user
                    }
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