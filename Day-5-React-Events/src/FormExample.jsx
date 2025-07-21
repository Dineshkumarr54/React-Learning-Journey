import React, { useState } from 'react'

function FormExample(){
    const [form,setForm] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
  return (
    <div>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='Name' />
        <br />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder='Email' />
        <p>Hello {form.name}, your email is {form.email}</p>
    </div>
  )
}

export default FormExample