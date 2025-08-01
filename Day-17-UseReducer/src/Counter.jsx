import React,{useReducer} from 'react';

const intialState = {count:0};

function reducer(state,action){
  switch(action.type){
    case "increment":
      return {count:state.count + 1};
    case "decrement":
      return {count: state.count - 1};
    case "reset":
      return intialState;
    default:
      return state;
  }
}

function Counter() {
  const [state,dispatch] = useReducer(reducer,intialState);
  return (
    <div style={{textAlign:"center"}}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({type: "increment"})}> + Increment</button>
      <button onClick={() => dispatch({type: "decrement"})}> + Decrement</button>
      <button onClick={() => dispatch({type: "reset"})}> Reset</button>
    </div>
  )
}

export default Counter