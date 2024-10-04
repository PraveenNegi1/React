import React from 'react'
import praveenpic from '../assets/praveenpic.jpeg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={praveenpic} height='200 px' width='150px'></img>
      <p id='user-desc'>Description of Praveen negi</p>
    </div>
  )
}

export default UserCard
