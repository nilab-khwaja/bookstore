import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // create a new book object

    const newBook = {
      title,
      author,
    };
    // pass the new book to the parent componet
    onAddBook(newBook);
    // clear the form inputs
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default BookForm;
