const express = require('express');
const User = require('../models/user');
const router = express.Router();
const upload = require('../tools/uploadMiddleware')
const {isAuth, isAdmin, generateToken} = require('../utils')
const expressAsyncHandler = require("express-async-handler");

router.post("/admin/signup", expressAsyncHandler(async (req, res) => {
  const scretKey = req.body.scretKey;
  if(scretKey!=='mec'){
    res.status(401).send({
      "message": "Request Failed"
    })
  }
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: user.isAdmin,
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user),
  });
}))

router.post("/admin/signin", expressAsyncHandler(async (req,res)=>{
  console.log(req.body)
  const user = await User.findOne({email: req.body.email});
  if(!user.isAdmin){
    res.status(403).send({
      message: "Admin protected Route"
    })
  }
  if(user){
    if(user.password === req.body.password){
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user)
      })
      return;
    }
  }
  res.status(401).send({
    message: "invalid email or password"
  })
}))

router.post('/add-user',  upload.single('image'), (req, res) => {
  const image = req.file.filename
  if(req.body.isAdmin === false){
    console.log('Hello')
    const NewUser = new User({
      name: req.body.name,
      registration: req.body.registration,
      collegeId: req.body.collegeId ,
      batchNo: req.body.batchNo,
      department: req.body.department,
      email: req.body.email,
      phone: req.body.phone,
      password : req.body.password,
      image: image,
      isAdmin: false
    });
    console.log(NewUser)
    NewUser.save((error) => {
    if (error) {
      console.log(error)
      res.status(500).send(error);
    } else {
      res.status(201).send(NewUser);
    }
  });
  }else{
    const NewUser = new User({
      name: req.body.name,
      email: req.body.email,
      password : req.body.password,
      phone: req.body.phone,
      image: image,
      isAdmin: true
    });
      NewUser.save((error) => {
      if (error) {
        console.log(error)
        res.status(500).send(error);
      } else {
        res.status(201).send(NewUser);
      }
    });
  }
});




// Route for all students
router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    console.log(users)
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get('', (req, res) => {
  const query = {};
  if (req.query.title) {
    query.title = { $regex: req.query.title, $options: 'i' };
  }
  if (req.query.author) {
    query.author = { $regex: req.query.author, $options: 'i' };
  }
  if (req.query.department) {
    query.department = req.query.department;
  }
  Book.find(query, (error, users) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(users);
    }
  });
});




router.post("/student/signin", expressAsyncHandler(async (req,res)=>{
  console.log(req.body)
  const user = await User.findOne({email: req.body.email});
  if(user.isAdmin){
    res.status(403).send({
      message: "Student Protected Route"
    })
  }
  if(user){
    if(user.password === req.body.password){
      res.send({
        user,
        token: generateToken(user)
      })
      return;
    }
  }
  res.status(401).send({
    message: "invalid email or password"
  })
}))
router.get('/:id', (req, res) => {
  console.log("hello id", req.params.id)
  User.findById(req.params.id, (error, user) => {
    if (error) {
      res.status(500).send(error);
    } else if (user) {
      res.send(user);
    } else {
      res.status(404).send();
    }
  });
});

// // Update a book
// router.put('/:id', (req, res) => {
//   Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, book) => {
//     if (error) {
//       res.status(500).send(error);
//     } else {
//       res.send(book);
//     }
//   });
// });

// // Delete a book
// router.delete('/:id', (req, res) => {
//   Book.findByIdAndRemove(req.params.id, (error) => {
//     if (error) {
//       res.status(500).send(error);
//     } else {
//       res.status(204).send();
//     }
//   });
// });
// router.get('/all', async (req, res) => {
//   try {
//     const books = await Book.find();
//     console.log(books)
//     res.send(books);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // Search for books
// router.get('', (req, res) => {
//     const query = {};
//     if (req.query.title) {
//       query.title = { $regex: req.query.title, $options: 'i' };
//     }
//     if (req.query.author) {
//       query.author = { $regex: req.query.author, $options: 'i' };
//     }
//     if (req.query.department) {
//       query.department = req.query.department;
//     }
//     Book.find(query, (error, books) => {
//       if (error) {
//         res.status(500).send(error);
//       } else {
//         res.send(books);
//       }
//     });
//   });
//   // Get a book by ID
// router.get('/:id', (req, res) => {
//     Book.findById(req.params.id, (error, book) => {
//       if (error) {
//         res.status(500).send(error);
//       } else if (book) {
//         res.send(book);
//       } else {
//         res.status(404).send();
//       }
//     });
//   });
  
module.exports = router;
