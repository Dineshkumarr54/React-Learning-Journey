import React, { useState } from 'react';

function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Thank you for contacting us, ${formData.name}!`);
  };

  return (
    <div style={styles.pageWrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Contact Us</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={styles.input}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
          style={{ ...styles.input, resize: 'none' }}
          required
        />

        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  form: {
    backgroundColor: '#1e1e1e',
    padding: '30px 40px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #444',
    borderRadius: '6px',
    backgroundColor: '#2c2c2c',
    color: '#fff',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    backgroundColor: '#007BFF',
    border: 'none',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ContactUsForm;
