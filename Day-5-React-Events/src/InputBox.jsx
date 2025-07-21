import React, { useState } from 'react'

function InputBox() {
    const [text,setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);     
    };

  return (
    <div>
        <input type="text" onChange={handleChange} />
        <p>You typed: {text}</p>
    </div>
  )
}

export default InputBox