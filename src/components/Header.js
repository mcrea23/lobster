import React from 'react'
import './Header.css'
import Lob from './images/Lob.jpeg'

const pic = Lob

const Header = () => {
  return (

      <header>
          <h1> <img src= {pic} alt=""/> </h1>
          <h2> LOBSTER MARKETING DEV TEST </h2>
  
      </header>


  )
}

export default Header