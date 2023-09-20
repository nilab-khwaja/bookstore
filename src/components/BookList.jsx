import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books, onDelete }) => (
  <div>
    {books.map((book) => (
      <div key={book.id}>
        <h3>
          Title:
          {book.title}
        </h3>
        <p>
          Author:
          {book.author}
        </p>
        <button type="submit" onClick={() => onDelete(book.title)}>Delete</button>
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default BookList;
