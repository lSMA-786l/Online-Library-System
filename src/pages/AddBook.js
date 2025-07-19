import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";
import "./AddBook.css";

const categories = [
  "Fiction",
  "Non Fiction",
  "Sci Fi",
  "Biography",
  "Mystery",
  "Fantasy"
];

const initialState = {
  title: "",
  author: "",
  description: "",
  rating: "",
  category: categories[0]
};

function AddBook() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.title.trim() || !form.author.trim() || !form.description.trim() || !form.rating || !form.category) {
      setError("All fields are required.");
      return false;
    }
    if (form.title.length < 2) {
      setError("Title must be at least 2 characters.");
      return false;
    }
    if (form.author.length < 2) {
      setError("Author must be at least 2 characters.");
      return false;
    }
    const ratingNum = Number(form.rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      setError("Rating must be a number between 1 and 5.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(addBook({ ...form, rating: Number(form.rating) }));
    setForm(initialState);
    navigate("/books/all");
  };

  return (
    <div className="addbook-container">
      <h1 className="addbook-title">Add a New Book</h1>
      <form className="addbook-form" onSubmit={handleSubmit}>
        {error && <div className="error-msg">{error}</div>}
        <div className="addbook-form-row">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="Book Title"
            autoComplete="off"
          />
        </div>
        <div className="addbook-form-row">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            name="author"
            type="text"
            value={form.author}
            onChange={handleChange}
            required
            placeholder="Author Name"
            autoComplete="off"
          />
        </div>
        <div className="addbook-form-row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            placeholder="Short Description"
          />
        </div>
        <div className="addbook-form-row">
          <label htmlFor="rating">Rating (1-5)</label>
          <input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            value={form.rating}
            onChange={handleChange}
            required
            placeholder="1-5"
          />
        </div>
        <div className="addbook-form-row">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;