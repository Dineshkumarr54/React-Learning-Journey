import React from 'react'

function UserList() {
    const users = [
        {id: 1,name:"Dinesh",age:23},
        {id: 2,name:"Priya",age:21},
        {id: 3,name:"Raj",age:25},
    ];
  return (
    <div>
        {users.map((user) =>(
            <p key={user.id}>
                {user.name} - {user.age} years old
            </p>
        ))}
    </div>
  )
}

export default UserList