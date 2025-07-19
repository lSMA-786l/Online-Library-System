import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from './redux/bookSlice';
import { BookCard, SearchBar } from './components';
// import { popularBooks } from './pages/Home'; 
import { createSlice } from '@reduxjs/toolkit';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Fantasy'];

export function Home({ navigate }) {
  return (
    <div className="home-page">
      <h1>Welcome to the Online Library System</h1>
      <h2>Book Categories</h2>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat}>
            <a href={`/books/${cat}`}>{cat}</a>
          </li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <div className="popular-books">
        {/* This part of the code in pages.jsx's Home component will now rely on the actual Home.js component's logic. */}
      </div>
    </div>
  );
}

export function BrowseBooks({ category, navigate }) {
  const books = useSelector(state => state.books.books);
  const [search, setSearch] = useState('');
  const filtered = books.filter(
    b => (category ? b.category === category : true) &&
      (b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()))
  );
  return (
    <div className="browse-books-page">
      <h1>Browse Books {category && `- ${category}`}</h1>
      <SearchBar value={search} onChange={setSearch} />
      <div className="book-list">
        {filtered.length ? filtered.map(book => (
          <BookCard key={book.id} book={book} onViewDetails={() => navigate(`/details/${book.id}`)} />
        )) : <p>No books found.</p>}
      </div>
    </div>
  );
}

export function BookDetails({ bookId, navigate }) {
  const books = useSelector(state => state.books.books);
  const book = books.find(b => b.id === Number(bookId));
  if (!book) return <div className="not-found">Book not found.<br /><button onClick={() => navigate('/books/Fiction')}>Back to Browse</button></div>;
  return (
    <div className="book-details-page">
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate(`/books/${book.category}`)}>Back to Browse</button>
    </div>
  );
}

export function AddBook({ navigate }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', author: '', category: categories[0], description: '', rating: '' });
  const [error, setError] = useState('');
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.author || !form.category || !form.description || !form.rating) {
      setError('All fields are required.');
      return;
    }
    dispatch(addBook({ ...form, id: Date.now(), rating: Number(form.rating) }));
    navigate(`/books/${form.category}`);
  }
  return (
    <div className="add-book-page">
      <h1>Add a New Book</h1>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="rating" placeholder="Rating (0-5)" type="number" min="0" max="5" step="0.1" value={form.rating} onChange={handleChange} />
        {error && <div className="form-error">{error}</div>}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <a href="/">Return to Home Page</a>
    </div>
  );
}

// export { popularBooks };