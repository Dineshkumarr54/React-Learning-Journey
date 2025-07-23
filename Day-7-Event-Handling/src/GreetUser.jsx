import { button } from 'framer-motion/client';
import React from 'react'

function GreetUser() {
    const greet = (name) => {
        alert(`Hello ${name}`);
    }
  return (
    <button onClick={()=>greet('Dinesh')}>Greet Me</button>
  )
}

export default GreetUser