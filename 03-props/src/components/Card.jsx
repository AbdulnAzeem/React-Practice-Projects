import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img}/>
        <h1>{props.user}</h1>
        <p>Lorem lallda alkjalf afljkjlkfajlfa klkakl</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card