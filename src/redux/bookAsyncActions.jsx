import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BlTIwZp3z9NYtJhv3dq4';

// // Function to create a new app
// async function createNewApp() {
//   try {
//     const response = await axios.post(`${baseURL}/apps/`);
//     const newAppId = response.data; // Assuming the response contains the new app's ID
//     console.log('New App ID:', newAppId);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Call the function to create a new app
// createNewApp();

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/${baseURL}/books`);
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
    const res = await axios.post(`${baseURL}/books`, newBook);
    if (res.status === 201) {
      return newBook;
    }
    return rejectWithValue('Failed to add book');
  } catch (error) {
    return rejectWithValue('Failed to add book');
  }
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId) => {
  await axios.delete(`${baseURL}/books/${itemId}`);
  return itemId;
});
