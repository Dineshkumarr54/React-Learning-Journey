import React,{useState,useEffect} from 'react'

function LoggerComponent() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log('component rendered or count changed')
    },[count])
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}

export default LoggerComponent