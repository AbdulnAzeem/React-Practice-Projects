import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Abdul Azeem' age={22} img='https://images.unsplash.com/photo-1751097006268-ae4601fcb117?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://unsplash.com/photos/aerial-view-of-village-on-mountain-cliff-during-orange-sunset-cYrMQA7a3Wc'/>      
      <Card user='Bagad Billa' age={200} img='https://images.unsplash.com/photo-1499678329028-101435549a4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D'/>
      <Card user='King' age={30} img='https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDRrJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww'/>
    </div>
  )
}

export default App