import React,{useState} from 'react'

function ControlledForm() {
    const[name,setName]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello,${name}`);
    };
  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={name}
        placeholder='Enter yout name'
        onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm