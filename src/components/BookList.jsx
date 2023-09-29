import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { fetchBooks } from '../redux/bookAsyncActions';
import styles from './styles/Booklist.module.css';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <div className={styles['inner-component']}>
        <ul>
          {books.map((book) => (
            <Book key={books.itemId || books.item_id || uuidv4()} book={book} />
          ))}
        </ul>
      </div>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return content;
};

export default BookList;
