import React from 'react'

const Modal = ({person}) => {
  return (
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
  )
}

export default Modal
