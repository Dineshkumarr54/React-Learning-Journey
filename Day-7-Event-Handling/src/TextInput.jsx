import Reac,{useState} from 'react'

function TextInput() {
    const [name,setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
  return (
    <div>
        <input type="text" value={name} onChange={handleChange} />
        <p>Your input: {name}</p>
    </div>
  )
}

export default TextInput