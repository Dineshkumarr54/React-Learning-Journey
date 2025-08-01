// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ContactForm() {
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/contacts/${id}`).then((res) => {
        setContact(res.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`http://localhost:5000/contacts/${id}`, contact);
    } else {
      await axios.post(`http://localhost:5000/contacts`, contact);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <h4>{id ? 'Edit Contact' : 'Add Contact'}</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input name="name" value={contact.name} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input name="email" value={contact.email} onChange={handleChange} className="form-control" type="email" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input name="phone" value={contact.phone} onChange={handleChange} className="form-control" required />
      </div>
      <button type="submit" className="btn btn-success">{id ? 'Update' : 'Add'} Contact</button>
    </form>
  );
}
