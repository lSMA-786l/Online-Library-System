import React from 'react';
import './SearchBar.css';

function SearchBar({ value, onChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search by title or author..."
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;