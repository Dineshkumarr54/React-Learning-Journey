import React, { useState } from 'react';
import './DailyGoalsTracker.css';

function DailyGoalsTracker() {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState('');

    const handleAddGoal = () => {
        if (newGoal.trim() === '') return;

        const newEntry = {
            id: Date.now(),
            title: newGoal,
            completed: false
        };
        setGoals([...goals, newEntry]);
        setNewGoal('');
    };

    const handleToggle = (id) => {
        setGoals(goals.map(goal =>
            goal.id === id ? { ...goal, completed: !goal.completed } : goal
        ));
    };

    const handleDelete = (id) => {
        setGoals(goals.filter(goal => goal.id !== id));
    };

    return (
        <div className='container'>
            <h2 className='heading'>🎯 Daily Goals Tracker</h2>
            <div className='input-section'>
                <input
                    type='text'
                    placeholder='Enter Your Goal'
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    className='input'
                />
                <button onClick={handleAddGoal}>Add Goal</button>
            </div>

            <ul className='list'>
                {goals.map(goal => (
                    <li key={goal.id} className='listItem'>
                        <input
                            type='checkbox'
                            checked={goal.completed}
                            onChange={() => handleToggle(goal.id)}
                        />
                        <span style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>
                            {goal.title}
                        </span>
                        <button onClick={() => handleDelete(goal.id)} className='deleteBtn'>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DailyGoalsTracker;
