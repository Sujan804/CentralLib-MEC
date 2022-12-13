const Student = require('../models/student')
//Something change
const addStudent = async (req,res,next) => {
    const newStudent = new Student({
       ...req.body
    })
    try{
        newStudent.save()
        res.send(200).json({
            student: newStudent
        })
    }catch{
        (err)=>{
            console.log(err)
        }
    }
}

const loginController = async (req,res,next)=>{
    const collegeId = req.body.collegeId
    console.log(collegeId)
    const user = await Student.findOne({collegeId: collegeId});
    if(user){
        res.status(200).send(user)
    }else{
       next()
    }
   
}
module.exports = {addStudent, loginController}