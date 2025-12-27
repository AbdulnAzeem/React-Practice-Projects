import React from 'react'

const App = () => {
  const handleSubmit=()=>
  {
    console.log("Clicked Here");
    
  }
  return (
    <div>
      <button onClick={handleSubmit}>Click Here</button>
    </div>
  )
}

export default App