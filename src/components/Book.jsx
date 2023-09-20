import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => (

  <div>
    <h3>
      Title:
      {book.title}
    </h3>
    <p>
      Author:
      {book.author}
    </p>
    <button type="button" onClick={() => onDelete(book.title)}>
      Delete
    </button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
