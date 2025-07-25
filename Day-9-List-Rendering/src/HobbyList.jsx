import React from 'react'

function HobbyList() {
    const hobbies = ["Coding","Reading Books","Watching Movies","Listening Music"];
  return (
    <div>
        <ul>
           {hobbies.map((hobbie,index) => (
            <li key={index}>{hobbie}</li>
           ))}
        </ul>
    </div>
  )
}

export default HobbyList