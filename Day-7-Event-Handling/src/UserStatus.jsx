import { color } from 'framer-motion';
import React,{useState} from 'react'

function UserStatus() {
    const [isOnline,setisOnline] = useState(true);

    const toggleStatus = () => {
        setisOnline(!isOnline);
    };
    
    const statusStyle = {
        color: isOnline ? 'green' : 'red',
        fontWeight:'bold'
    };
  return (
    <div>
        <h2 style={statusStyle}>{isOnline ? 'user is online':'user is offline'}</h2>
        <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  )
}

export default UserStatus