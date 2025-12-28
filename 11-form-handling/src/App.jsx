import React from 'react'

const App = () => {
  const submitHandler=(e)=>
  {
    e.preventDefault()
    console.log(e);    
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" placeholder='Enter Your Distinguishing Factor'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App