import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
