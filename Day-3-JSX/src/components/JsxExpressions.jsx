import React from 'react'
import './JsxExpression.css'

function JsxExpressions() {
    const name ="John Doe";
    const year = new Date().getFullYear();
  return (
    <div className='greeting'>
      <h1>Hello, {name}!</h1>
      <p>The current year is {year}.</p>
      <p>2 + 2 = {2 + 2}</p>
    </div>
  )
}

export default JsxExpressions