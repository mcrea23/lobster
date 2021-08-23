import { useState } from 'react'
import React from 'react'
import './contactCard.css'

export const Person = ({person}) => {
  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);

  return (
    <div class="card">
      <div class="contactCard"> 
        <div class="container">
          <img src={person.picture.medium} alt=""></img>
          <h3 class="style1">{person.name.first} {person.name.last} </h3>
          <h3 class="style2"> {person.location.city}, {person.location.state} </h3>
          <button onClick={() => setShow(true)}className="modal-button"> 
          Learn More </button> 
          </div>


          
    <div className="modal-wrapper">
      <div className="modal-header">
      <img src={person.picture.thumbnail} alt="Avatar"></img>
      <span className="close-modal-btn">x</span>
    </div>
      <div className="modal-content">
        <div className="modal-body">
        <h4> {person.name.first} {person.name.last}  </h4>
      <p> 
      {person.dob.age} <br/><br/>
      Mobile: {person.cell}<br/>
      Email: {person.email} 
      </p>
      <div className="modal-footer">
        <button className="btn-cancel"> Close </button>
      </div>
    </div>
  </div>
  </div>
</div>
</div>

  )
}
