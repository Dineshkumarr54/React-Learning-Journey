import React from 'react'

const  NumberInput = ({number,setNumber}) => {
    const handleChange = (e) => {
        setNumber(e.target.value);
    }
  return (
    <div>
        <input 
          type='number'
          value={number}
          onChange={handleChange}
          placeholder='Enter a number'
          style={{padding:'10px',fontSize:'16px'}} 
        />
    </div>
  )
}

export default NumberInput