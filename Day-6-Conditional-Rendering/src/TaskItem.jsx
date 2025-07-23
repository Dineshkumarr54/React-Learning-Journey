import React from 'react'

function TaskItem({task}) {
  return (
    <li>{task.title}</li>
  )
}

export default TaskItem