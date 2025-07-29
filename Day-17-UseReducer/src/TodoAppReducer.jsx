import React,{useReducer,useState} from 'react';

const intialState = [];

function reducer(todos,action){
    switch(action.type){
        case "ADD":
            return[
                ...todos,
                {id:Date.now(),text:action.payload,completed:false},
            ];
        case "TOGGLE":
            return todos.map((todo) => 
            todo.id === action.payload
        ? {...todo,completed: !todo.completed}
        : todo
         );
        case "DELETE":
            return todos.filter((todo) => todo.id !== action.payload);
        case "RESET":
            return [];
        default:
            return todos;
    }
}  

function TodoAppReducer() {
    const [todos,dispatch] = useReducer(reducer,intialState);
    const [input,setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() === "")return;
        dispatch({type:"ADD",payload:input});
        setInput("");
    }
  return (
    <div style={{maxWidth:400,margin:"auto"}}>
        <h2>useReducer Todo App</h2>
        <form onSubmit={handleSubmit}>
            <input
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Add a todo..." 
            />
            <button type='submit'>Add</button>
        </form>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span
                      style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                        cursor : "pointer",
                      }}
                      onClick={() => dispatch({type: "TOGGLE",payload:todo.id})}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => dispatch({type:"DELETE",payload:todo.id})}>
                         ❌
                    </button>
                </li>
            ))}
        </ul>

        {todos.length > 0 && (
            <button onClick={() => dispatch({type: "RESET"})}>Reset All</button>
        )}
    </div>
  )
}

export default TodoAppReducer