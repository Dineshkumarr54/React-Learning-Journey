import React from 'react'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div className="container">
      <h1>🌐 Developer Profiles</h1>
      <ProfileCard
        imgSrc="https://randomuser.me/api/portraits/men/32.jpg"
        name="Michael Scott"
        location="New York, USA"
        bio="Tech lead with a knack for creative solutions and clean code."
      />
      <ProfileCard
        imgSrc="https://randomuser.me/api/portraits/women/44.jpg"
        name="Pam Beesly"
        location="London, UK"
        bio="Creative front-end developer and UI/UX enthusiast."
      />
      <ProfileCard
        imgSrc="https://randomuser.me/api/portraits/men/65.jpg"
        name="Jim Halpert"
        location="San Francisco, USA"
        bio="Full-stack developer specializing in React and Node.js."
      />
    </div>
  )
}

export default App
