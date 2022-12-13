const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const register = async (req,res,next)=>{
    const {email, password} = req.body
    console.log(req.body.email)
    const user = User.findOne({email:email})
    if(user===undefined){
        console.log(user.password)
        res.status(400).send("Email already exist")
    }else{
        const SALT_ROUND = 10
        try{
           bcrypt.hash(password, SALT_ROUND, async (err, hash)=>{
                if(err){
                    res.send(err.message)
                }else{
                    const newUser = new User({
                        email: email,
                        password: hash
                    })
                    await newUser.save()
                        .then((user)=>{
                            res.send({
                                success: true,
                                message: "User created successfully",
                                user: {
                                    id: user._id,
                                    email: user.email
                                }
                            })
                        })
                        .catch((err)=>{
                            res.send({
                                success: false,
                                message: "User is not created",
                                error: err.message
                            })
                        })
                }
           })
        }catch{
            (err)=>{
                console.log(err.message)
            }
        }
    }
   
}

/// Login Router

const login = async (req,res,next)=>{
    const {email, password} = req.body

    const user =   await User.findOne({email: email});
    if(!user){
        res.send({
            success: false,
            message : "Email isn't registerd"
        })
        next()
    }else{
        if(!bcrypt.compareSync(password, user.password)){
            req.send({
                success: false,
                message: 'Incorrect password!'
            })
        }else{
            const payload = {
                id : user._id,
                email: user.email
            }
            const token  = jwt.sign(payload,process.env.SECRET_KEY, {
                expiresIn: "2h"
            })
            res.status(200).send({
                success: true,
                message: "User is loggedin successfully",
                token: "Bearer "+token,
        
            })
        }
       
    }
   

}

module.exports = {register,login}