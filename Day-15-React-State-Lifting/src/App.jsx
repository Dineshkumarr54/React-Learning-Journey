import React,{useState} from 'react'
import NumberInput from './components/NumberInput';
import EvenOddDisplay from './components/EvenOddDisplay';

function App() {
   const [number,setNumber] = useState('');
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
        <h2>Even or Odd Checker</h2>
        <NumberInput number={number} setNumber={setNumber} />
        <EvenOddDisplay number={number} />
    </div>
  )
}

export default App