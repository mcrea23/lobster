import React from 'react'
import './contactCard.css'

export const Person = ({person}) => {
  return (
    <div class="card">
      <div class="contactCard"> 
        <div class="container">
          <img src={person.picture.thumbnail} alt="Avatar"></img>
          <h3 class="style1">{person.name.first} {person.name.last} </h3>
          <h3 class="style2"> {person.location.city}, {person.location.state} </h3>
          <p><button> Learn More </button> </p>
          </div>
        </div>
      </div>

  )
}
