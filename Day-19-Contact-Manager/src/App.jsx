// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">📇 Contact Manager</h1>
        <nav className="mb-3">
          <Link to="/" className="btn btn-primary me-2">Home</Link>
          <Link to="/add" className="btn btn-success">Add Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<ContactForm />} />
          <Route path="/edit/:id" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}
