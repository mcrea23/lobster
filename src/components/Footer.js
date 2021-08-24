import React from 'react'
import './Footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LastPageIcon from '@material-ui/icons/LastPage';


const Footer = () => {
  return (
    <div className="footer">
        <footer>
          <LastPageIcon fontSize="large" onClick={() => window.open("https://me.me/embed/i/28ebb2c2aa274a69adafc4aab24f2ab1" )}></LastPageIcon>

          <h5 className="medium"> Mcrea Smith  </h5>
          <LinkedInIcon fontSize="large" onClick={() => window.open('https://www.linkedin.com/in/mcrea-smith/')}> LinkedIn </ LinkedInIcon>
          <h6 className="tiny"> 
          Copyright &copy; 2021 Lobster Marketing. All Rights Reserved.     | Terms & Conditions  | Accessibility Statement </h6>
        </footer>
    </ div>
  )
}

export default Footer

