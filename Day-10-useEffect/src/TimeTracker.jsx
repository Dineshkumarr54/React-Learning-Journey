import React,{useState,useEffect} from 'react'

function TimeTracker() {
    const [currentTime,setCurrentTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        },1000);

        return () => {
            clearInterval(timer);
        };
    },[]);
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h2>Current Time</h2>
        <h1>{currentTime}</h1>
    </div>
  )
}

export default TimeTracker