import { useState } from 'react'
import React from 'react'
import './contactCard.css'
import People from './People'

const Person = (props) => {

  // debugger 
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="card">
      {console.log(props.index)}
      <div className="contactCard"> 
        <div className="container">
          <img src={props.person.picture.medium} alt=""></img>
          <h3 className="style1">{props.person.name.first} {props.person.name.last} </h3>
          <h3 className="style2"> {props.person.location.city}, {props.person.location.state} </h3>
          <button onClick={ () => props.show(props.index)}className="modal-button"> 
          Learn More </button> 
          </div>


          
    {/* <div className="modal-wrapper">
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
  </div> */}
</div>
</div>

)

}
export default Person
