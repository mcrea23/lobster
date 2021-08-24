import React from 'react'
import './Header.css'
import lobster from './images/lobster.png'

const pic = lobster

const Header = () => {
  return (
    <header>
      <h1> <img src= {pic} alt="" className="Lob"/> </h1>
      <h4> LOBSTER MARKETING DEV TEST </h4>
      <div className="body-content"> 
        <h2> I'd &hearts; to work here! </h2>
          <p> I believe Lobster Marketing would be an amazing opportunity for to work out. I know I would fit in with the team culture. I am hard-working and ready to start my future with your company. Give me the chance to be a part of your team!  </p>
      </div>
    </header>
  )
}

export default Header