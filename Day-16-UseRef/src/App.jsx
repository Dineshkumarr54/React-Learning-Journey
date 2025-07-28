import React,{useRef} from "react";
import "./App.css";

export default function App(){
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({behaviour:"smooth"});
  };

  return(
    <div className="App">
      <div className="card">
        <h2>Focus Input Example</h2>
        <input ref={inputRef} type="text" placeholder="Click the button to focus"/>
        <button onClick={handleFocus}>Focus Input</button>
      </div>

      <div className="card">
        <h2>Scroll to Section</h2>
        <button onClick={handleScroll}>Scroll to Bottom Section</button>
      </div>

      <div style={{height:"500px"}}/>

      <div ref={scrollRef} className="card highlight">
        <h2>You Have Reached the Target Section</h2>
        <p>This section was scrolled into view using useRef and scrollIntoView().</p>
      </div>
    </div>
  )
}
