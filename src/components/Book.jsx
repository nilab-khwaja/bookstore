import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/bookAsyncActions';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const {
    itemId, title, author, category,
  } = book;

  const handleRemoveBook = (itemId) => {
    try {
      dispatch(removeBookAsync(itemId));
    } catch (error) {
      console.log('Error in removing the item', error);
    }
  };

  return (
    <li key={itemId}>
      <p>
        Title:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={() => handleRemoveBook(book.itemId)}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
