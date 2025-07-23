import React from 'react'
import UserGreeting from './UserGreeting'
import UserRole from './UserRole'
import TaskList from './TaskList'

function App() {
  return (
    <div>
      {/* <UserGreeting isLoggedIn={true} unreadMessages={5} /> */}
      <UserRole isLoggedIn={true} role={'admin'}/>
      <TaskList />
    </div>
  )
}

export default App