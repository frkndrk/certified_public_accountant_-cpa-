import React from 'react'
import AboutUs from "../../components/aboutUs/AboutUs"
import "./servicesPage.scss"
import plaza2 from "../../assets/plaza2.jpg"

const ServicesPage = () => {
  return (
    <div className='servicesPage'>
        <div className='imgCont'>
          <img src={plaza2} alt="" />
          <div className='textServ'>
            <h1>Hizmetlerimiz</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <AboutUs />
    </div>
  )
}

export default ServicesPage