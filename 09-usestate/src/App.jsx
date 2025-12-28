import React from 'react'
import { useState } from 'react'

const App = () => {
  const [state,setState]=useState(0);
  const decrement=()=>
  {
    setState(state-1);
  }
  const print=()=>
  {
    console.log(state);    
  }
  const increment=()=>
  {
    setState(state+1);
  }
  return (
    <div style={{textAlign:"center"}}>
      <h3 >{state}</h3>
      <button onClick={decrement}>
        Click Here
      </button>
      <button onClick={print}>
        Click Here
      </button>
      <button onClick={increment}>
        Click Here
      </button>
    </div>
  )
}

export default App