import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, addBookAsync, removeBookAsync } from '../bookAsyncActions';

const initialState = {
  books: [],
  status: 'idle',
  error: null,

};

const bookSlice = createSlice({
  name: 'book',
  initialState, // Updated initial state
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })

      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })

      .addCase(addBookAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = state.books.filter((book) => book.itemId !== action.payload);
      })

      .addCase(removeBookAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },

});

export default bookSlice.reducer;
