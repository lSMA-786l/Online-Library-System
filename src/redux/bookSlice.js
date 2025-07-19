import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A classic novel set in the Roaring Twenties.',
      rating: 4.5,
      category: 'Fiction',
      popular: true,
    },
    {
      id: 2,
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      description: 'An overview of cosmology and black holes.',
      rating: 4.7,
      category: 'Non-Fiction',
      popular: true,
    },
    {
      id: 3,
      title: 'Dune',
      author: 'Frank Herbert',
      description: 'A science fiction epic on the desert planet Arrakis.',
      rating: 4.8,
      category: 'Sci-Fi',
      popular: true,
    },
    // Add more dummy books as needed
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, id: Date.now(), popular: false });
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;