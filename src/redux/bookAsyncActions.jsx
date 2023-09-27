import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const baseURL = '';

export const fetchBooks = createAsyncThunk('books/fetchBooks' , async () => {
    try{
        const response = await axios.get(`${baseURL}/apps/abc123/books`);
        return response.data;
    }
    catch(error){
        throw error;
    }
})

export const addBookAsync = createAsyncThunk('books/addBook' , async ()=>{
    try{
        await axios.post(`${baseURL}/apps/abc123/books` , bookData);
    }
    catch(error){
        throw error;
    }
});

export  const removeBookAsync = createAsyncThunk('books/removeBook', async ()=>{
    try{
        await axios.delete(`${baseURL}/apps/abc123/books/${bookId}`);
        return bookId
    }
    catch(error){
        throw error;
    }
});