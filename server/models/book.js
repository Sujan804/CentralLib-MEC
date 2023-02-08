const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    default: 0,
    required: false
  },
  department: {
    type: String,
  },
  isbn: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String
  },
  image: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
