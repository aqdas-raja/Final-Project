const express = require('express');
const router = express.Router();
const Book = require('../models/BooksSchema');
router.post('/books', (req, res) => {
    const { bookName, writer } = req.body;
  
    // Create a new book using the Book model
    const newBook = new Book({
      bookName:req.body.bookName,
      writer:req.body.writer,
    });
  
    // Save the new book to the database
    newBook.save((err, savedBook) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add the book.' });
      } else {
        res.status(201).json(savedBook);
      }
    });
  });
  
module.exports = router
