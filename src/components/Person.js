import { useState } from 'react'
import React from 'react'
import './contactCard.css'
import Modal from './Modal'

const Person = ({person}) => {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
        <div className="box"> 
          <img src={person.picture.medium} alt=""></img>
          <h3 className="style1">
            {person.name.first} 
            {person.name.last} </h3>
          <h3 className="style2"> 
            {person.location.city}, 
            {person.location.state} </h3>
          <button onClick={() => handleShow()} className="modal-button"> 
          Learn More 
          </button> 

          { show ? <Modal person = {person} close = {handleClose} /> : null }
          
        </div>

)

}
export default Person
