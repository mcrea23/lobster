import React from 'react'
import './contactCard.css'

export const Person = ({person}) => {
  return (
    <div class="container">
      <div class="contact-card">
        <div class="card">
          <img src={person.picture.thumbnail} alt="iconpicture"></img>
          <h3 style={{ color: 'black'}}>{person.name.first} {person.name.last} | {person.location.city}, {person.location.state}</h3>
          <p class="title"> </p>
        </div>
      </div>
    </div>
  )
}
