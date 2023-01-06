const express = require('express');
const Book = require('../models/book');
const router = express.Router();
const upload = require('../tools/uploadMiddleware')



// Add a book
router.post('/books', upload.single('image'), (req, res) => {
  console.log(req.body)
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    stock: req.body.stock,
    department: req.body.department,
    isbn: req.body.isbn,
    description: req.body.description,
  });
  console.log(book)
  book.save((error) => {
    if (error) {
      console.log(error)
      res.status(500).send(error);
    } else {
      res.status(201).send(book);
    }
  });
});


// Update a book
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, book) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(book);
    }
  });
});

// Delete a book
router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(204).send();
    }
  });
});
// Search for books
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
    Book.find(query, (error, books) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.send(books);
      }
    });
  });
  // Get a book by ID
router.get('/:id', (req, res) => {
    Book.findById(req.params.id, (error, book) => {
      if (error) {
        res.status(500).send(error);
      } else if (book) {
        res.send(book);
      } else {
        res.status(404).send();
      }
    });
  });
  
module.exports = router;
