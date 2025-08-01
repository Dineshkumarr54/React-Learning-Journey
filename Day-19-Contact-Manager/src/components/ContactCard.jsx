// src/components/ContactCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactCard({ contact, onDelete }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">📧 {contact.email}</p>
          <p className="card-text">📞 {contact.phone}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/edit/${contact.id}`} className="btn btn-warning btn-sm">Edit</Link>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
