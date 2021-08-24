import React from 'react'
import './contactCard.css'

const Modal = (props) => {
  return (
    <div className="modal-container">
    <div className="modal-wrapper">
      <div className="modal-header">
      <img src=
      {props.person.picture.thumbnail} alt="Avatar">
      </img>
      <span onClick={ () => props.close()} className="close-modal-btn"> x 
      </span>
    </div>
    <div className="modal-content">
      <div className="modal-body">
        <h4> 
          {props.person.name.first}  {props.person.name.last}  
        </h4>
        <p> 
        {props.person.dob.age} <br/><br/>
        Mobile: {props.person.cell}<br/>
        Email: {props.person.email} 
        </p>
      <div className="modal-footer">
        <button onClick={ () => props.close()} className="btn-cancel"> Close 
        </button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Modal