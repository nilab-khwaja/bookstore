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

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BlTIwZp3z9NYtJhv3dq4/books');
  const res = response.data;
  console.log(res);
  return res;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (newBook) => {
  const {
    item_id, title, author, category,
  } = newBook;
  const dataToSend = {
    item_id,
    title,
    author,
    category,
  };
  const response = await axios.post(`${baseURL}/books`, dataToSend);
  const ress = response.data;
  console.log(ress);
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId) => {
  await axios.delete(`${baseURL}/books/${itemId}`);
  return itemId;
});
