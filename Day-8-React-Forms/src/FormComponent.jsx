import React,{use, useState} from 'react'
import "./FormComponent.css"

function FormComponent() {
    const [name,SetName] = useState("");
    const [gender,setGender] = useState("");
    const [agreed,setAgreed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name:${name}\nGender:${gender}\nAgreed tot terms:${agreed}`);
    };
  return (
    <div className='form-container'>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                 type='text'
                 value={name}
                 onChange={(e) => SetName(e.target.value)}
                 required
                />
            </label>

            <label>
                Gender:
                <input 
                  type='radio'
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
            </label>
            <label>
                <input 
                  type='radio'
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
            </label>
            <label className='checkbox-label'>
                <input 
                 type='checkbox'
                 checked={agreed}
                 onChange={(e) => setAgreed(e.target.checked)}
                />
                I agree to the terms and conditions
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormComponent