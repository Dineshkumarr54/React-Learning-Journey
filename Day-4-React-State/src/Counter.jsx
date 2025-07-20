import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);  
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
  const getMessage = () => {
    if (count === 0) return "😐 Let's get started!";
    else if (count <= 5) return "🙂 Keep going...";
    else if (count <= 10) return "😃 Nice! You're doing well!";
    else return "🤩 You're on fire!";
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Count: {count}</h2>
      <p>{getMessage()}</p>
      <button onClick={handleIncrement}>➕ Increment</button>
      <button onClick={handleDecrement}>➖ Decrement</button>
      <button onClick={handleReset}>🔄 Reset</button>
    </div>
  );
}

export default Counter;