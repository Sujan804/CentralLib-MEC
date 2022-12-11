
const express = require('express');
const { model } = require('mongoose');

const router = express.Router()
const Student = require('../../models/student')
router.post('/add-student', async (req,res)=>{
    console.log("Hello I'm from add student")
    const newStudent = new Student({
        name: req.body.name,
        registration: req.registration,
        classRoll: req.classRoll,
        batchNo: req.batchNo,
        collegeId: req.collegeId,
        department: req.department,
        email: req.email,
        phone: req.phone,
        password: req.password
    });
    try{
        await newStudent.save()
         res.send(200).json({
            message: "Student added succefully"
        })
    }catch{
        
        (err)=>{
            console.log(err)
        }
    }
   
    
})

module.exports = router