import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Fantasy'];

function Home() {
  const books = useSelector(state => state.books.books);
  const popularBooks = books.filter(book => book.popular);

  return (
    <div className="home-page">
      <h1>Welcome to the Online Library</h1>
      <h2>Book Categories</h2>
      <ul className="category-list">
        {categories.map(cat => (
          <li key={cat}><Link to={`/books/${cat}`}>{cat}</Link></li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <div className="book-list">
        {popularBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;