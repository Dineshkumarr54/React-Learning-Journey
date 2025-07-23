import React from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  const taskList = [
    { id: 1, title: 'Learn React', completed: true },
    { id: 2, title: 'Build a Portfolio', completed: false },
    { id: 3, title: 'Apply for Internship', completed: false }
  ];

  return (
    <div>
      <h2>Pending Tasks</h2>
      <ul>
        {taskList
          .filter(task => !task.completed)
          .map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        }
      </ul>
    </div>
  );
}

export default TaskList;
