import React from 'react';
import './App.css';

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Online Library System</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/books/Fiction">Browse Books</a>
        <a href="/add">Add Book</a>
      </div>
    </nav>
  );
}

export function BookCard({ book, onViewDetails }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <button onClick={() => onViewDetails(book)}>View Details</button>
    </div>
  );
}

export function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by title or author..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}