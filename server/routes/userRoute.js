const express = require('express');
const User = require('../models/user');
const router = express.Router();
const upload = require('../tools/uploadMiddleware')




router.post('',  upload.single('image'), (req, res) => {
  const image = req.file.filename
  if(req.body.isAdmin === "false"){
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
      collegeId: req.body.collegeId ,
      email: req.body.email,
      password : req.body.password,
      image: image,
      isAdmin: true
    });
    const refId = User.find({id:id});
    if(refId){
      User.save()
      res.send("User succesfully signed in");
      console.log("success")
    }else{
      res.send("failed");
      console.log("fail");
    }
  }
 
  
});

//Route for all students
router.get('/all', async (req, res) => {
  try {
    const users = await User.find();
    console.log(users)
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
// router.get('', (req, res) => {
//   const query = {};
//   if (req.query.title) {
//     query.title = { $regex: req.query.title, $options: 'i' };
//   }
//   if (req.query.author) {
//     query.author = { $regex: req.query.author, $options: 'i' };
//   }
//   if (req.query.department) {
//     query.department = req.query.department;
//   }
//   Book.find(query, (error, books) => {
//     if (error) {
//       res.status(500).send(error);
//     } else {
//       res.send(books);
//     }
//   });
// });
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
