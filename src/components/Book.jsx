import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ProgressBar from 'react-customizable-progressbar';
import { removeBookAsync } from '../redux/bookAsyncActions';
import styles from './styles/Book.module.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const {
    itemId, title, author, category,
  } = book;

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className='book-list'>
    <div className={styles.container}>
      <div className={styles.book}>
        <div>
          <h4 className="category">{category}</h4>
          <h2 className="title">{title}</h2>
          <h5 className="author">{author}</h5>

          <ul className="actions">
            <li><button type="button">comments</button></li>
            <li><button type="button" onClick={() => handleRemoveBook(itemId)}>Remove</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>

        <div className={styles.analytics}>
          <div className="spinner">
            <ProgressBar
              radius={35}
              progress={64}
              strokeWidth={5}
              strokeColor="#379cf6"
              trackStrokeWidth={7}
              trackStrokeColor="#e6e6e6"
              pointerFill="white"
              pointerStrokeWidth={7}
              pointerStrokeColor="indianred"
            />
            <div className="percentage">
              <h5>64%</h5>
              <h6>Completed</h6>
            </div>
          </div>

          <div className="readin-state">
            <h4>CURRENT CHAPTER</h4>
            <h3 className="chapter">Chapter 17</h3>

            <button type="submit">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
    </div>
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
