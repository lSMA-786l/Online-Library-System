import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Fantasy'];

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter(
    book =>
      (category ? book.category === category : true) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse-books-page">
      <h1>Browse Books</h1>
      <div className="category-nav">
        {categories.map(cat => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className={cat === category ? 'active-category' : ''}
          >
            {cat}
          </Link>
        ))}
      </div>
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;