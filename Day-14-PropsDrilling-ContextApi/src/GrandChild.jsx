import React, { useContext } from 'react'
import UserContext from './UserContext';

const GrandChild = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <h4>GrandChild Component</h4>
        <p>Hello, {user}</p>
    </div>
  );
}

export default GrandChild