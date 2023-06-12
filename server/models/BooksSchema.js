const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    bookName: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
  });

  const Book = mongoose.model('Book', bookSchema);
  module.exports = Book;

