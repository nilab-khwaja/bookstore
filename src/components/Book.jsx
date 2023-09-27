import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/bookAsyncActions';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (itemId) => {
    try {
      dispatch(removeBookAsync(itemId));
    } catch (error) {
      console.log('Error in removing the item', error);
    }
  };

  return (
    <li key={book.item_id}>
      <p>
        Title:
        {book.title}
      </p>
      <p>
        Author:
        {book.author}
      </p>
      <p>
        Category:
        {book.category}
      </p>
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
