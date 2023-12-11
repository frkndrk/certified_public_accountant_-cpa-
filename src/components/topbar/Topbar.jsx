import "./topbar.scss"
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="addresBar">
        <ul>
          <li><LocationOnIcon fontSize="small" style={{marginRight: "5px"}}/> Mutlukent Mah. 2038.Sok. Çankaya/ANKARA</li>
          <li><EmailIcon fontSize="small" style={{marginRight: "5px"}} /> aytinis@gmail.com</li>
        </ul>
      </div>
      <div className="icons">
        <ul>
          <li><TwitterIcon fontSize="10px"/></li>
          <li><FacebookIcon fontSize="10px"/></li>
          <li><InstagramIcon fontSize="10px"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar