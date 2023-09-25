import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  // Define state to manage books
  const [books, setBooks] = useState([]);

  // Function to handle book creation
  const handleAddBook = (newBook) => {
    // Add the new book to the list of books
    setBooks([...books, newBook]);
  };

  // Function to handle book deletion
  const handleDeleteBook = (bookTitle) => {
    // Remove the book at the specified index
    const updatedBooks = books.filter((book) => book.title !== bookTitle);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Books</h1>
      {/* Book Form */}
      <BookForm onAddBook={handleAddBook} />

      {/* Book List */}
      <BookList books={books} onDelete={handleDeleteBook} />
    </div>
  );
};

export default Books;
