import { p } from 'framer-motion/client';
import React from 'react'

function NameList() {
    const names=["Alice","Bob","Charlie"];
  return (
    <div>
        {names.map((name,index) => (
            <p key={index}>{name}</p>
        ))}
    </div>
  )
}

export default NameList