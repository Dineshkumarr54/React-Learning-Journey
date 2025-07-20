import React, { useState } from 'react'

function ToggleButton() {
    const [isOn,setIsOn]= useState(false);
    const toggle = () => {
        setIsOn(!isOn);
    };
  return (
    <div>
        <h2>The light is {isOn ? 'ON' : 'OFF'}</h2>
      <button onClick={toggle}>{isOn ? 'OFF' : 'ON'}</button>
    </div>
  )
}

export default ToggleButton