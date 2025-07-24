import {useRef} from 'react'

function UncontrolledForm() {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello,${inputRef.current.value}`);
    };
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' ref={inputRef} placeholder='Enter Your Name'/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UncontrolledForm