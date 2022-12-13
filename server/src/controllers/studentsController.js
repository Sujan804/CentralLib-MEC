const  student =  require('../models/student')
const loginController = async (req,res,next)=>{
    console.log("Hello from login")
    const id = req.body.collegeId;
    const user = student.find({collegeId:id});
    if(user && req.body.password === user.password){
        res.send(200).json({
            ...user
        })
    }else{
        console.log(`${id} password ${password} not found`)
        res.send(404)
    }
}
module.exports = loginController