import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'

const Home = () => <h2>🏠 Welcome to Home</h2>;
const Projects = () => <h2>📂 My Projects</h2>;
const Contact = () => <h2>📞 Contact Me</h2>;
const NotFound = () => <h2>❌ Page Not Found</h2>;

function App() {
  return (
    <Router>
      <nav style={{padding:'10px',display:'flex',gap:'10px'}}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App