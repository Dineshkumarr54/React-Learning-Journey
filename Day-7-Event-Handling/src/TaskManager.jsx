import { li } from 'framer-motion/client';
import React,{useState} from 'react'

function TaskManager() {
    const [tasks,setTasks] =useState([]);
    const [inputValue,setInputValue] = useState('');

    const handleAddTask = () => {
        if(inputValue.trim() !== ''){
            setTasks([...tasks,inputValue]);
            setInputValue('');
        }
    };

  return (
    <div>
        <h2>TaskManager</h2>
        <input
         type='text'
         placeholder='Enter a task'
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>

        <ul>
            {tasks.map((task,index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    </div>
  )
}

export default TaskManager