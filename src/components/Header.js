import React from 'react'
import './Header.css'
import lobster from './images/lobster.png'

const pic = lobster

const Header = () => {
  return (

      <header>
          <h1> <img src= {pic} alt=""/> </h1>
          <h4> LOBSTER MARKETING DEV TEST </h4>
  
      </header>


  )
}

export default Header