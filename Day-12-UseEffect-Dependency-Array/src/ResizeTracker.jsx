import { use } from 'framer-motion/m';
import React,{useEffect,useState} from 'react'

function ResizeTracker() {
    const [windowWidth ,setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);

        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[]);
  return (
        <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width:'100vw',
      background: 'linear-gradient(to right, #667eea, #764ba2)',
      color: '#fff',
      fontFamily: 'Segoe UI, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '10px',
        textShadow: '1px 1px 5px rgba(0,0,0,0.3)'
      }}>
        📏 Window Width Tracker
      </h1>
      <p style={{
        fontSize: '2rem',
        background: '#fff',
        color: '#333',
        padding: '10px 30px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        marginTop: '20px',
        fontWeight: 'bold'
      }}>
        {windowWidth}px
      </p>
    </div>
  )
}

export default ResizeTracker