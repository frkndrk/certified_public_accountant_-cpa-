import "./topbar.scss"
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="contTB">
        <div className="addresBar">
          <ul>
            <li><LocationOnIcon fontSize="small" style={{marginRight: "5px"}}/> Mutlukent Mah. 2038.Sok. No:7 Çankaya/ANKARA</li>
            <li><EmailIcon fontSize="small" style={{marginRight: "5px"}} /> info@enkaymm.com</li>
          </ul>
        </div>
        <div className="phoneNum">
          <span><CallIcon /></span>
          <p>0 554 358 25 38</p>
        </div>
        <div className="icons">
          <ul>
            <li><TwitterIcon fontSize="10px"/></li>
            <li><FacebookIcon fontSize="10px"/></li>
            <li><InstagramIcon fontSize="10px"/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Topbar