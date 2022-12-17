const User = require("../models/user")
const adminHome = async (req,res,next)=>{
    res.status(200).send({
        success: true,
        message: 'Okay'
    }) 
   
}

module.exports ={adminHome}