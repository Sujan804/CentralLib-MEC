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
module.exports = {adminSignUp}