const express = require('express');
const {addStudent, loginController} = require('../controllers/adminControllers')
const router = express.Router();
const Student = require('../models/student')
router.post('/add-student',  addStudent)
router.post('/login',loginController)


// router.post('/add-student',  async (req,res,next) => {
//     const newStudent = new Student({
//         // name: req.body.name,
//         // registration: req.body.registration,
//         // classRoll: req.body.classRoll,
//         // batchNo: req.body.batchNo,
//         // collegeId: req.body.collegeId,
//         // department: req.body.department,
//         // email: req.body.email,
//         // phone: req.body.phone,
//         // password: req.body.password
//         ...req.body,
//         password: req.body.password+"extra"


//     })
//     try{
//         newStudent.save()
//         res.send(200).json({
//             student: newStudent
//         })
//     }catch{
//         (err)=>{
//             console.log(err)
//         }
//     }
// })

module.exports = router