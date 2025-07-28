import React from 'react'

const EvenOddDisplay = ({number}) => {
    const parsed = parseInt(number,10);
    const result = isNaN(parsed)
     ? 'Please enter a valid number.'
     : parsed % 2 === 0
     ? 'It is Even!'
     : 'It is Odd!';

  return (
    <div style={{marginTop:'20px',fontSize:'20px'}}>
        {result}
    </div>
  )
}

export default EvenOddDisplay