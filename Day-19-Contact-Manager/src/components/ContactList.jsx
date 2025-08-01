// src/components/ContactList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const res = await axios.get('http://localhost:5000/contacts');
    setContacts(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/contacts/${id}`);
    getContacts();
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="row">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
}
