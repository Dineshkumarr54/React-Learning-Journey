import React from 'react'
import './App.css'

const ProfileCard = ({ imgSrc, name, location, bio }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={name} className="avatar" />
      <div className="info">
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard
