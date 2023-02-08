const mongoose = require('mongoose');

const bookTransactionSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['borrow', 'return'],
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const BookTransaction = mongoose.model('BookTransaction', bookTransactionSchema);

module.exports = BookTransaction;
