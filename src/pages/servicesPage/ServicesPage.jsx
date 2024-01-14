import React from 'react'
import AboutUs from "../../components/aboutUs/AboutUs"
import "./servicesPage.scss"
import plaza2 from "../../assets/plaza2.jpg"

const ServicesPage = () => {
  return (
    <div className='servicesPage'>
        <div className='imgCont'>
          <img src={plaza2} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
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