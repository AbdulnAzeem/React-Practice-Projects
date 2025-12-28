import React, { useState } from 'react'

const App = () => {
  const [state, setState] = useState(0)
  const increment=()=>
    {
      setState(state+1) 
      setState(state+1) 
      setState(state+1) 
    }
  return (    
    <div style={{justifyItems:"center"}}>
    <h3>{state}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App