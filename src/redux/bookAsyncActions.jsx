import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BlTIwZp3z9NYtJhv3dq4/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(baseURL);
    const res = response.data;

    if (res === '') return [];

    const arrayOfItems = Object.keys(res).map((key) => {
      const item = res[key][0];
      return {
        itemId: key,
        author: item.author,
        title: item.title,
        category: item.category,
      };
    });
    return arrayOfItems;
  } catch (error) {
    return rejectWithValue('Failed to fetch books');
  }
});

export const addBookAsync = createAsyncThunk('books/addBook', async (newBook, { rejectWithValue }) => {
  try {
    const res = await axios.post(baseURL, newBook);
    if (res.status === 201) {
      return newBook;
    }
    return rejectWithValue('Failed to add book');
  } catch (error) {
    return rejectWithValue('Failed to add book');
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId, { rejectWithValue }) => {
  try {
    const res = await axios.delete(`${baseURL}/${itemId}`);
    if (res.status === 201) {
      return itemId;
    }
    return rejectWithValue('Failed to remove book');
  } catch (error) {
    return rejectWithValue('Failed remove book');
  }
});
