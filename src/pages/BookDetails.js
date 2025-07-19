import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';


function BookDetails() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.books.find(b => b.id === Number(bookId)));

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <div className="book-details-page">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate(-1)} className="back-btn">Back to Browse</button>
    </div>
  );
}

export default BookDetails;