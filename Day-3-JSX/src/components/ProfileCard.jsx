import React from 'react'
import './ProfileCard.css'

function ProfileCard(props) {
  return (
    <div className='profile-card'>
       <img src={props.avatar} alt="avatar" /> 
      <h1>Name: {props.name}</h1>   
      <p>Designation : {props.job}</p>
    </div>
  )
}

export default ProfileCard